import { FromAndToKeyCode, map, rule } from 'karabiner.ts';
import { ifNotNormalMode } from './mode-switching';

const modifierKeys = [
  'left_shift',
  'right_shift',
  'left_control',
  'right_control',
  'left_option',
  'right_option',
  'left_command',
  'right_command',
] as FromAndToKeyCode[];

const rules = [
  rule('Disable unused keys in vim mode', ifNotNormalMode).manipulators([
    ...modifierKeys.map((key) => map(key, undefined, 'any').to(key)),
    map({ any: 'key_code', modifiers: { optional: ['any'] } }).to('vk_none'),
  ]),
];

export default rules;
