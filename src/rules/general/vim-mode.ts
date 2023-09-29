import { vimModeShortcuts } from '../../shortcuts/general/vim-mode';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifVimModeEnabled } from '../rules-helpers';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('Vim mode rules', [ifVimModeEnabled]);
  clickHelperWrapper.registerShortcuts(vimModeShortcuts);
}
