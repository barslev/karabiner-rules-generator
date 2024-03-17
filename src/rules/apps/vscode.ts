import { vscodeShortcuts } from '../../shortcuts/apps/vscode';
import { ifApp } from 'karabiner.ts';
import { ifVimModeEnabled } from '../rules-helpers';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('vscode navigation', [
    ifVimModeEnabled,
    ifApp('com.microsoft.VSCodeInsiders'),
  ]);
  clickHelperWrapper.registerShortcuts(vscodeShortcuts);
}
