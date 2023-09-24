import { ifVimModeEnabled } from '../general/mode-switching';
import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp, rule } from 'karabiner.ts';
import { getManipulators, setupReturnToEnterVimMode } from '../rules-helpers';
import { ClickHelper } from '../../lib-extensions/click-helper';

const clickHelper = new ClickHelper();
const rules = [
  rule(
    'Setup return to enter vim mode',
    ifApp('com.jetbrains.intellij'),
  ).manipulators([setupReturnToEnterVimMode()]),
  rule(
    'intelliJ navigation',
    ifVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ).manipulators([
    ...getManipulators(intelliJShortcuts, clickHelper),
    ...clickHelper.getPostProcessManipulators(),
  ]),
];
export default rules;
