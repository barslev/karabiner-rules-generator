import {
  FromKeyCode,
  FromKeyParam,
  ifVar,
  map,
  ModifierParam,
  ToKeyParam,
  toSetVar,
} from 'karabiner.ts';
import {
  Options,
  ShortcutDescriptor,
  Shortcuts,
} from '../shortcuts/shortcut-helpers';
import { setModeToNoMode } from '../rules/general/mode-switching';

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
          .toNotificationMessage('apply-click-2', 'apply-click-2')
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

  setupBasic(
    from:
      | [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined]
      | FromKeyCode,
    to:
      | [ToKeyParam, ModifierParam | undefined]
      | ToKeyParam
      | ((x: ManipulatorBuilder) => ManipulatorBuilder),
    options?: Options,
  ): void {
    const fromManipulator = Array.isArray(from) ? map(...from) : map(from);
    const toEvent =
      typeof to === 'function'
        ? to(fromManipulator)
        : Array.isArray(to)
        ? fromManipulator.toIfAlone(...to)
        : fromManipulator.toIfAlone(to);
    this.singleKeyManipulators.push(applyOptions(options, toEvent));
  }

  getManipulators() {
    return [
      ...this.secondKeyManipulators,
      ...this.firstKeyManipulators.values(),
      ...this.singleKeyManipulators,
    ];
  }

  registerShortcuts<T extends string>(shortcuts: Shortcuts<T>) {
    Object.values<ShortcutDescriptor>(shortcuts)
      .filter((shortcut) => shortcut.from[0])
      .flatMap((shortcut) => {
        if (Array.isArray(shortcut.from))
          this.setupBasic(shortcut.from, shortcut.to);
        else {
          const toHandler = (x: ManipulatorBuilder) => {
            let res =
              typeof shortcut.to === 'function'
                ? shortcut.to(x)
                : x.to(...shortcut.to);
            res = applyOptions(shortcut.options, res);
            return res;
          };
          if (shortcut.from.includes(',')) {
            const [key1, key2] = shortcut.from.split(',');
            this.registerTwoClickSequence(
              key1 as FromKeyParam,
              key2 as FromKeyParam,
              toHandler,
            );
          } else if (shortcut.from.includes('+')) {
            const [key1, key2] = shortcut.from.split('+');
            this.registerSecondKeyPressedWhileFirstHeldDown(
              key1 as FromKeyParam,
              key2 as FromKeyParam,
              toHandler,
            );
          } else throw new Error('Not supported yet');
        }
      });
  }
}
function applyOptions(options: Options | undefined, res: ManipulatorBuilder) {
  if (!options) return res;
  if (options?.disableVimMode) res = setModeToNoMode(res);
  if (options?.returnToVimOnEnter) res.toVar('return_to_vim_on_enter', 1);
  return res;
}
