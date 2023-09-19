import { ifVimModeEnabled } from '../general/mode-switching';
import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp, map, rule } from 'karabiner.ts';

const rules = [
  rule(
    'intelliJ navigation',
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ).manipulators([
    map(...intelliJShortcuts.BACK.from).to(...intelliJShortcuts.BACK.to),
    map(...intelliJShortcuts.TO.from).to(...intelliJShortcuts.TO.to),
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
