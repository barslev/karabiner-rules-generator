import {
  ConditionBuilder,
  FromAndToKeyCode,
  ifVar,
  map,
  rule,
  toNotificationMessage,
  toRemoveNotificationMessage,
  toSetVar,
} from 'karabiner.ts';

export function setupReturnToEnterVimMode() {
  return setModeToVim(
    map('return_or_enter')
      .to('return_or_enter')
      .toVar('return_to_vim_on_enter', 0)
      .condition(ifVar('return_to_vim_on_enter', 1)),
  );
}

export const vimNotificationKey = 'Vim mode enabled';
export const VIM_MODE_VARIABLE = 'vim_mode';
export const NO_MODE = 0;
export const VIM_MODE = 1;
export const VISUAL_MODE = 2;

export const setModeToVimNotificationToEvent = toNotificationMessage(
  vimNotificationKey,
  'Vim mode',
);
const setModeToVimToEvent = toSetVar(VIM_MODE_VARIABLE, VIM_MODE);
export const setVimModeWithHalt = setModeToVimToEvent;
setVimModeWithHalt.halt = true;

export const ifVimModeEnabled = ifVar(VIM_MODE_VARIABLE, VIM_MODE);
export const ifNormalMode = ifVar(VIM_MODE_VARIABLE, NO_MODE);
export const ifVisualModeEnabled = ifVar(VIM_MODE_VARIABLE, VISUAL_MODE);

export const ifNotNormalMode = ifVar(VIM_MODE_VARIABLE, NO_MODE).unless();

export function setModeToNoMode(x: ReturnType<typeof map>) {
  return x
    .toVar(VIM_MODE_VARIABLE, NO_MODE)
    .toRemoveNotificationMessage(vimNotificationKey);
}

export function setModeToVim(x: ReturnType<typeof map>) {
  return x
    .toVar(VIM_MODE_VARIABLE, VIM_MODE)
    .toNotificationMessage(vimNotificationKey, 'Vim mode');
}

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

export function getDisableUnusedKeysRule(
  condition: ConditionBuilder,
  ruleSuffix: string,
) {
  return rule(`Disable unused keys in ${ruleSuffix}`, condition).manipulators([
    ...modifierKeys.map((key) => map(key).to(key)), // was originally map(key, undefined, 'any') instead of just map(key), but that was causing issues when running in VSCode.
    map({ any: 'key_code', modifiers: { optional: ['any'] } }).to('vk_none'),
  ]);
}
