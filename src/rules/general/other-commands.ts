import { ifVimModeEnabled } from '../rules-helpers';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { otherCommandsShortcuts } from '../../shortcuts/general/other-commands';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('other commands', [ifVimModeEnabled]);
  clickHelperWrapper.registerShortcuts(otherCommandsShortcuts);
}
