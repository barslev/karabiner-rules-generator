import { FromKeyParam, map } from 'karabiner.ts';
import {
  secondKeyPressedWhileFirstHeldDown,
  twoClickSequence,
} from '../lib-extensions/lib-extensions';
import { setModeToNoMode } from './general/mode-switching';
import { ShortcutDescriptor, Shortcuts } from '../shortcuts/shortcut-helpers';

export function getManipulators<T extends string>(shortcuts: Shortcuts<T>) {
  return [
    ...Object.values<ShortcutDescriptor>(shortcuts)
      .filter((shortcut) => shortcut.from[0])
      // .sort((a, b) => {
      //   if (typeof a.from === 'string' && typeof b.from === 'string') {
      //     return a.from.includes(',') ? -1 : 1;
      //   } else if (typeof a.from === 'string') return -1;
      //   else if (typeof b.from === 'string') return 1;
      //   else return 0;
      // })
      .flatMap((shortcut) => {
        let res;
        if (Array.isArray(shortcut.from))
          res = map(...shortcut.from).toIfAlone(...shortcut.to);
        else {
          if (shortcut.from.includes(',')) {
            const [key1, key2] = shortcut.from.split(',');
            res = twoClickSequence(
              key1 as FromKeyParam,
              key2 as FromKeyParam,
              (x) => x.to(...shortcut.to),
            );
          } else if (shortcut.from.includes('+')) {
            const [key1, key2] = shortcut.from.split('+');
            res = secondKeyPressedWhileFirstHeldDown(
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
