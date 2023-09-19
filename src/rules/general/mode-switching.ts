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

export const setModeToVimNotificationToEvent = toNotificationMessage(
  vimNotificationKey,
  'Vim mode',
);
const setModeToVimToEvent = toSetVar(VIM_MODE_VARIABLE, VIM_MODE);
const setVimModeWithHalt = setModeToVimToEvent;
setVimModeWithHalt.halt = true;
const rules = [
  rule('Switch to vim mode', ifVar(VIM_MODE_VARIABLE, NO_MODE)).manipulators([
    map(...VimModeShortcuts.SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE)
      .toIfAlone(setVimModeWithHalt)
      .toIfHeldDown(setModeToVimToEvent)
      .to(setModeToVimNotificationToEvent)
      .toAfterKeyUp(toSetVar(VIM_MODE_VARIABLE, NO_MODE))
      .toAfterKeyUp(toNotificationMessage(vimNotificationKey, '')),
  ]),
  rule(
    'Switch mode from vim_mode',
    ifVar(VIM_MODE_VARIABLE, VIM_MODE),
  ).manipulators([
    setModeToNoMode(map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE)),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_START_LINE).to(
        'left_arrow',
        ['left_command'],
      ),
    ),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_END_LINE).to(
        'right_arrow',
        ['left_command'],
      ),
    ),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_BELOW)
        .to('right_arrow', ['left_command'])
        .to('return_or_enter'),
    ),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_ABOVE)
        .to('left_arrow', ['left_command'])
        .to('return_or_enter')
        .to('up_arrow'),
    ),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET)
        .to('left_arrow', ['left_option'])
        .to('right_arrow', ['left_option', 'left_shift']),
    ),
    setModeToNoMode(
      map(...VimModeShortcuts.SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET_LINE)
        .to('left_arrow', ['left_command'])
        .to('right_arrow', ['left_command', 'left_shift']),
    ),
    map(...VimModeShortcuts.SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE)
      .to(toSetVar(VIM_MODE_VARIABLE, VISUAL_MODE))
      .toNotificationMessage(vimNotificationKey, 'Visual mode'),
  ]),
  rule(
    'Switch visual mode off',
    ifVar(VIM_MODE_VARIABLE, VISUAL_MODE),
  ).manipulators([
    setModeToVim(map(...VimModeShortcuts.SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE)),
  ]),
];

export const ifVimModeEnabled = ifVar(VIM_MODE_VARIABLE, VIM_MODE);
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

export default rules;
