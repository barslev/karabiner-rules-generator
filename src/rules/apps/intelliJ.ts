import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp } from 'karabiner.ts';
import { ifVimModeEnabled } from '../rules-helpers';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('intelliJ navigation', [
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ]);
  clickHelperWrapper.registerShortcuts(intelliJShortcuts);
}
