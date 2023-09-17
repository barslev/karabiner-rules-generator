import { FromAndToKeyCode } from 'karabiner.ts';

type VimModeShortcutsKeys =
  | 'SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE'
  | 'SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE'
  | 'SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE';

export const VimModeShortcuts: Record<VimModeShortcutsKeys, FromAndToKeyCode> =
  {
    SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE: 'caps_lock',
    SWITCH_FROM_VIM_TO_NORMAL_MODE: 'i',
    SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE: 'v',
    SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE: 'v',
  };
