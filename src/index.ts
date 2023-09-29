// import { writeToProfile } from 'karabiner.ts';
import { registerRules as registerModeSwitchingRules } from './rules/general/mode-switching';
import { registerRules as registerIntelliJRules } from './rules/apps/intelliJ';
import { registerRules as registerChromeRules } from './rules/apps/chrome';
import { registerRules as registerAppSwitchingRules } from './rules/general/app-switching';
import { registerRules as registerVimModeRules } from './rules/general/vim-mode';
import { registerRules as registerVisualModeRules } from './rules/general/visual-mode';
import { registerRules as registerUnusedKeysInSpecialModeRules } from './rules/general/disable-unused-keys-in-special-modes';
import { ClickHelperWrapper } from './lib-extensions/click-helper-wrapper';

const clickHelperWrapper = new ClickHelperWrapper();
[
  registerAppSwitchingRules,
  registerIntelliJRules,
  registerChromeRules,
  registerVimModeRules,
  registerVisualModeRules,
  registerModeSwitchingRules,
  registerUnusedKeysInSpecialModeRules,
].forEach((registerRules) => registerRules(clickHelperWrapper));
clickHelperWrapper.applyRules();
