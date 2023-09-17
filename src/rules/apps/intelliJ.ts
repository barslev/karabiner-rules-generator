import { isVimModeEnabled } from '../general/general';
import { intelliJShortcuts } from '../../shortcuts/apps/intelliJ';
import { ifApp, map, rule } from 'karabiner.ts';

const rules = [
  rule(
    'intelliJ navigation',
    isVimModeEnabled,
    ifApp('com.jetbrains.intellij'),
  ).manipulators([
    map(...intelliJShortcuts.BACK.from).to(...intelliJShortcuts.BACK.to),
    map(...intelliJShortcuts.TO.from).to(...intelliJShortcuts.TO.to),
  ]),
];
export default rules;
