import { FromAndToKeyCode, map, rule } from 'karabiner.ts';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifNotNormalMode } from '../rules-helpers';

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

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.addRule(
    rule('Disable unused keys in vim mode', ifNotNormalMode).manipulators([
      ...modifierKeys.map((key) => map(key, undefined, 'any').to(key)),
      map({ any: 'key_code', modifiers: { optional: ['any'] } }).to('vk_none'),
    ]),
  );
}
