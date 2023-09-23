import { FromKeyCode, ModifierParam } from 'karabiner.ts';

type VimModeShortcutsKeys =
  | 'SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_START_LINE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_END_LINE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_BELOW'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_COMMA_AT_END_LINE_AND_NEW_LINE_BELOW'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_ABOVE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET_LINE'
  | 'SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE'
  | 'SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE';

export const VimModeShortcuts: Record<
  VimModeShortcutsKeys,
  [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined]
> = {
  SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE: ['caps_lock', undefined, undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE: ['i', undefined, undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_START_LINE: ['i', 'left_shift', undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_END_LINE: ['a', 'left_shift', undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_BELOW: ['o', undefined, undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_COMMA_AT_END_LINE_AND_NEW_LINE_BELOW: [
    'o',
    'left_option',
    undefined,
  ],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_ABOVE: [
    'o',
    'left_shift',
    undefined,
  ],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET: ['i', 'left_option', undefined],
  SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET_LINE: [
    'i',
    'right_option',
    undefined,
  ],
  SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE: ['v', undefined, undefined],
  SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE: ['v', undefined, undefined],
};
