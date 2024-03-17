import {
  FromKeyCode,
  FromKeyParam,
  ToKeyParam,
  ifVar,
  map,
  toKey,
  toSetVar,
} from 'karabiner.ts';
import {
  Options,
  ShortcutDescriptor,
  Shortcuts,
} from '../shortcuts/shortcut-helpers';
import {
  getDisableUnusedKeysRule,
  setModeToNoMode,
  setModeToNoModeNoArgs,
  setModeToVim,
} from '../rules/rules-helpers';
import { wrapInDelayedActionAndSetNoModeInCancel } from './utils';

export type ManipulatorBuilder = ReturnType<typeof map>;

export class ClickHelper {
  private readonly secondKeyManipulators: ManipulatorBuilder[] = [];
  private readonly firstKeyManipulators: Map<FromKeyParam, ManipulatorBuilder> =
    new Map();
  private readonly singleKeyManipulators: ManipulatorBuilder[] = [];

  private setupFirstClick(from1: FromKeyParam): void {
    if (this.firstKeyManipulators.has(from1)) return;
    this.firstKeyManipulators.set(
      from1,
      map(from1)
        .condition(ifVar(`${from1}_pressed`, 0))
        .to(toSetVar(`${from1}_pressed`, 1))
        .to(toSetVar(`${from1}_held_down`, 1))
        .toAfterKeyUp(toSetVar(`${from1}_held_down`, 0))
        .toDelayedAction(
          toSetVar(`${from1}_pressed`, 0),
          toSetVar(`${from1}_pressed`, 0),
        )
        .parameters({
          'basic.to_delayed_action_delay_milliseconds': 500,
        }),
    );
  }

  registerTwoClickSequence(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ManipulatorBuilder) => ManipulatorBuilder,
  ): void {
    this.setupFirstClick(from1);
    this.secondKeyManipulators.push(
      applyTo(
        map(from2)
          .toVar(`${from1}_pressed`, 0)
          .condition(ifVar(`${from1}_pressed`, 1))
          .condition(ifVar(`${from1}_held_down`, 0)),
      ),
    );
  }

  registerSecondKeyPressedWhileFirstHeldDown(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ManipulatorBuilder) => ManipulatorBuilder,
  ): void {
    this.setupFirstClick(from1);
    this.secondKeyManipulators.push(
      applyTo(map(from2).condition(ifVar(`${from1}_held_down`, 1))),
    );
  }

  getSecondKeyManipulators() {
    return this.secondKeyManipulators;
  }

  getFirstKeyManipulators() {
    return [...this.firstKeyManipulators.values()];
  }

  getSingleKeyManipulators() {
    return this.singleKeyManipulators;
  }

  getManipulators() {
    return [
      ...this.secondKeyManipulators,
      ...this.firstKeyManipulators.values(),
      ...this.singleKeyManipulators,
    ];
  }

  registerShortcuts<T extends string>(shortcuts: Shortcuts<T>) {
    Object.values<ShortcutDescriptor>(shortcuts).flatMap(
      ({ from, to, options }) => {
        const toHandler = (x: ManipulatorBuilder) => {
          let res;
          if (typeof to === 'function') res = to(x);
          else if (Array.isArray(to)) {
            if (Array.isArray(from) || from === 'd,d') res = x.to(...to);
            else res = wrapInDelayedActionAndSetNoModeInCancel(x, toKey(...to));
          } else res = x.to(to);
          res = applyOptions(options, res);
          return res;
        };
        if (typeof from === 'string' && from.includes(',')) {
          const [key1, key2] = from.split(',');
          this.registerTwoClickSequence(
            key1 as FromKeyParam,
            key2 as FromKeyParam,
            toHandler,
          );
        } else if (typeof from === 'string' && from.includes('+')) {
          const [key1, key2] = from.split('+');
          this.registerSecondKeyPressedWhileFirstHeldDown(
            key1 as FromKeyParam,
            key2 as FromKeyParam,
            toHandler,
          );
        } else {
          const fromManipulator = Array.isArray(from)
            ? map(from[0], from[1], options?.optionalModifiers)
            : map(from as FromKeyCode);
          this.singleKeyManipulators.push(
            applyOptions(options, toHandler(fromManipulator)),
          );
        }
      },
    );
  }

  getDisableOtherSecondKeysRule() {
    const firstKeys = this.firstKeyManipulators.keys();
    return [...firstKeys].map((firstKey) =>
      getDisableUnusedKeysRule(
        ifVar(`${firstKey}_pressed`),
        `${firstKey}_pressed`,
      ),
    );
  }
}
function applyOptions(options: Options | undefined, res: ManipulatorBuilder) {
  if (!options) return res;
  if (options?.disableVimMode) res = setModeToNoMode(res);
  if (options?.enableVimMode) res = setModeToVim(res);
  if (options?.returnToVimOnEnter) res.toVar('return_to_vim_on_enter', 1);
  return res;
}
