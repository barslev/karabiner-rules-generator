import { ifVimModeEnabled } from '../general/mode-switching';
import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp, rule } from 'karabiner.ts';
import { setupReturnToEnterVimMode } from '../../lib-extensions/lib-extensions';
import { getManipulators } from '../rules-helpers';

const rules = [
  rule(
    'Setup return to enter vim mode',
    ifApp('com.jetbrains.intellij'),
  ).manipulators([setupReturnToEnterVimMode()]),
  rule(
    'intelliJ navigation',
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ).manipulators([...getManipulators(intelliJShortcuts)]),
];
export default rules;
