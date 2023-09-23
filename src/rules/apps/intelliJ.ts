import { ifVimModeEnabled, setModeToNoMode } from '../general/mode-switching';
import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { FromKeyParam, ifApp, map, rule } from 'karabiner.ts';
import {
  secondKeyPressedWhileFirstHeldDown,
  setupReturnToEnterVimMode,
  twoClickSequence,
} from '../../lib-extensions/lib-extensions';

const rules = [
  rule(
    'Setup return to enter vim mode',
    ifApp('com.jetbrains.intellij'),
  ).manipulators([setupReturnToEnterVimMode()]),
  rule(
    'intelliJ navigation',
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ).manipulators([
    ...Object.values(intelliJShortcuts)
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
    //
  ]),
];
export default rules;

// Go to beginning/end of blocks in IntelliJ
// {
//                 conditions: [
//                     {
//                         bundle_identifiers: [
//                             "com.googlecode.iterm2",
//                             "com.github.atom",
//                             "com.jetbrains.pycharm",
//                             "com.visualstudio.code.oss"
//                         ],
//                         type: "frontmost_application_unless"
//                     },
//                     {
//                         name: "visual_mode",
//                         type: "variable_if",
//                         value: 1
//                     }
//                 ],
//                 from: {
//                     key_code: "w",
//                     modifiers: {
//                         mandatory: ['left_option']
//                     }
//                 },
//                 to: [
//                     {
//                         key_code: "a",
//                         modifiers: [
//                             "left_shift",
//                             "left_control",
//                             "left_option",
//                             "left_command"
//                         ]
//                     }
//                 ],
//                 type: "basic"
//             },
//             {
//                 conditions: [
//                     {
//                         bundle_identifiers: [
//                             "com.googlecode.iterm2",
//                             "com.github.atom",
//                             "com.jetbrains.pycharm",
//                             "com.visualstudio.code.oss"
//                         ],
//                         type: "frontmost_application_unless"
//                     },
//                     {
//                         name: "visual_mode",
//                         type: "variable_if",
//                         value: 1
//                     }
//                 ],
//                 from: {
//                     key_code: "r",
//                     modifiers: {
//                         mandatory: ['left_option']
//                     }
//                 },
//                 to: [
//                     {
//                         key_code: "b",
//                         modifiers: [
//                             "left_shift",
//                             "left_control",
//                             "left_option",
//                             "left_command"
//                         ]
//                     }
//                 ],
//                 type: "basic"
//             },

// TODO: Map d + w to delete line in IntelliJ
// TODO: Map keys for navigating to block start/end in IntelliJ
