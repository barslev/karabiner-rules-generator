import { ifVisualModeEnabled } from '../rules-helpers';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { VisualModeShortcuts } from '../../shortcuts/general/visual-mode';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('Visual mode rules', [ifVisualModeEnabled]);
  clickHelperWrapper.registerShortcuts(VisualModeShortcuts);
}
