import {
  ifVar,
  map,
  rule,
  toNotificationMessage,
  toSetVar,
} from 'karabiner.ts';
import { VimModeShortcuts } from '../../shortcuts/general/general';

const vimNotificationKey = 'Vim mode enabled';
const VIM_MODE_VARIABLE = 'vim_mode';
const NO_MODE = 0;
const VIM_MODE = 1;
const VISUAL_MODE = 2;

const rules = [
  rule('Switch to vim mode', ifVar(VIM_MODE_VARIABLE, NO_MODE)).manipulators([
    map(VimModeShortcuts.SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE)
      .to(toSetVar(VIM_MODE_VARIABLE, VIM_MODE))
      .to(toNotificationMessage(vimNotificationKey, 'Vim mode')),
  ]),
  rule(
    'Switch mode from vim_mode',
    ifVar(VIM_MODE_VARIABLE, VIM_MODE),
  ).manipulators([
    map(VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE)
      .to(toSetVar(VIM_MODE_VARIABLE, NO_MODE))
      .to(toNotificationMessage(vimNotificationKey, '')),
    map(VimModeShortcuts.SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE)
      .to(toSetVar(VIM_MODE_VARIABLE, VISUAL_MODE))
      .toNotificationMessage(vimNotificationKey, 'Visual mode'),
  ]),
  rule(
    'Switch visual mode off',
    ifVar(VIM_MODE_VARIABLE, VISUAL_MODE),
  ).manipulators([
    map(VimModeShortcuts.SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE)
      .to(toSetVar(VIM_MODE_VARIABLE, VIM_MODE))
      .toNotificationMessage(vimNotificationKey, 'Vim mode'),
  ]),
];

export const ifVimModeEnabled = ifVar(VIM_MODE_VARIABLE, VIM_MODE);

export default rules;
