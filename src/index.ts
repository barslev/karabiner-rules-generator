import { writeToProfile } from 'karabiner.ts';
import modeSwitchingRules from './rules/general/mode-switching';
import intelliJRules from './rules/apps/intelliJ';
import chromeRules from './rules/apps/chrome';
import appSwitchingRules from './rules/general/app-switching';
import vimMode from './rules/general/vim-mode';
import visualMode from './rules/general/visual-mode';
import disableUnusedKeysInSpecialModes from './rules/general/disable-unused-keys-in-special-modes';

writeToProfile('Default profile', [
  ...appSwitchingRules,
  ...intelliJRules,
  ...chromeRules,
  ...vimMode,
  ...visualMode,
  ...modeSwitchingRules,
  ...disableUnusedKeysInSpecialModes,
]);
