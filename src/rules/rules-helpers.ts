import { setModeToVim } from './general/mode-switching';
import { ifVar, map } from 'karabiner.ts';

export function setupReturnToEnterVimMode() {
  return setModeToVim(
    map('return_or_enter')
      .to('return_or_enter')
      .toVar('return_to_vim_on_enter', 0)
      .condition(ifVar('return_to_vim_on_enter', 1)),
  );
}
