import { FromKeyParam, ifVar, map } from 'karabiner.ts';
import { setModeToNoMode, setModeToVim } from './general/mode-switching';
import { ShortcutDescriptor, Shortcuts } from '../shortcuts/shortcut-helpers';
import { ClickHelper } from '../lib-extensions/click-helper';

export function getManipulators<T extends string>(
  shortcuts: Shortcuts<T>,
  clickHelper: ClickHelper,
) {
  return [
    ...Object.values<ShortcutDescriptor>(shortcuts)
      .filter((shortcut) => shortcut.from[0])
      .flatMap((shortcut) => {
        let res;
        if (Array.isArray(shortcut.from))
          res = clickHelper.setupBasic(shortcut.from, shortcut.to);
        else {
          if (shortcut.from.includes(',')) {
            const [key1, key2] = shortcut.from.split(',');
            res = clickHelper.twoClickSequence(
              key1 as FromKeyParam,
              key2 as FromKeyParam,
              (x) => x.to(...shortcut.to),
            );
          } else if (shortcut.from.includes('+')) {
            const [key1, key2] = shortcut.from.split('+');
            res = clickHelper.secondKeyPressedWhileFirstHeldDown(
              key1 as FromKeyParam,
              key2 as FromKeyParam,
              (x) => x.to(...shortcut.to),
            );
          } else throw new Error('Not supported yet');
        }
        if (shortcut.options?.disableVimMode) {
          if (Array.isArray(res) && res.length === 2) {
            res = [res[0], setModeToNoMode(res[1])];
          } else if (!Array.isArray(res)) {
            res = setModeToNoMode(res);
          }
        }
        if (shortcut.options?.returnToVimOnEnter) {
          if (Array.isArray(res) && res.length === 2) {
            res = [res[0], res[1].toVar('return_to_vim_on_enter', 1)];
          } else if (!Array.isArray(res)) {
            res = res.toVar('return_to_vim_on_enter', 1);
          }
        }
        return res;
      }),
  ];
}

export function setupReturnToEnterVimMode() {
  return setModeToVim(
    map('return_or_enter')
      .to('return_or_enter')
      .toVar('return_to_vim_on_enter', 0)
      .condition(ifVar('return_to_vim_on_enter', 1)),
  );
}
