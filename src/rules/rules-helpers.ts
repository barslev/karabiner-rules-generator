import { ifVar, map, toNotificationMessage, toSetVar } from 'karabiner.ts';

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
