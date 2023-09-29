import { ifApp } from 'karabiner.ts';
import { chromeShortcuts } from '../../shortcuts/apps/chrome';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifVimModeEnabled } from '../rules-helpers';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('Chrome navigation', [
    ifVimModeEnabled,
    ifApp('com.google.Chrome'),
  ]);
  clickHelperWrapper.registerShortcuts(chromeShortcuts);
}
