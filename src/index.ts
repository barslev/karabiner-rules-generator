import { writeToProfile } from 'karabiner.ts';
import modeSwitchingRules from './rules/general/mode-switching';
import intelliJRules from './rules/apps/intelliJ';
import appSwitchingRules from './rules/general/app-switching';
import vimMode from './rules/general/vim-mode';
import visualMode from './rules/general/visual-mode';
import disableUnusedKeysInSpecialModes from './rules/general/disable-unused-keys-in-special-modes';

writeToProfile('Default profile', [
  ...intelliJRules,
  ...appSwitchingRules,
  ...vimMode,
  ...visualMode,
  ...modeSwitchingRules,
  ...disableUnusedKeysInSpecialModes,
]);
