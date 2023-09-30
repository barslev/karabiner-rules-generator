import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp, rule } from 'karabiner.ts';
import { ifVimModeEnabled, setupReturnToEnterVimMode } from '../rules-helpers';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.addRule(
    rule(
      'Setup return to enter vim mode',
      ifApp('com.jetbrains.intellij'),
    ).manipulators([setupReturnToEnterVimMode()]),
  );
  clickHelperWrapper.startRule('intelliJ navigation', [
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ]);
  clickHelperWrapper.registerShortcuts(intelliJShortcuts);
}
