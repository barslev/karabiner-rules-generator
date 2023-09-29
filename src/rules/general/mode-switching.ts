import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import {
  ModeSwitchingFromNoModeShortcuts,
  ModeSwitchingFromVimModeShortcuts,
  ModeSwitchingFromVisualModeShortcuts,
} from '../../shortcuts/general/mode-switching';
import {
  ifNormalMode,
  ifVimModeEnabled,
  ifVisualModeEnabled,
} from '../rules-helpers';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('from normal mode to vim mode', [ifNormalMode]);
  clickHelperWrapper.registerShortcuts(ModeSwitchingFromNoModeShortcuts);

  clickHelperWrapper.startRule('from vim mode', [ifVimModeEnabled]);
  clickHelperWrapper.registerShortcuts(ModeSwitchingFromVimModeShortcuts);

  clickHelperWrapper.startRule('from visual mode', [ifVisualModeEnabled]);
  clickHelperWrapper.registerShortcuts(ModeSwitchingFromVisualModeShortcuts);
}
