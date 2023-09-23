import { ifVimModeEnabled } from '../general/mode-switching';
import { ifApp, /*ifApp,*/ map, rule } from 'karabiner.ts';
import { chromeShortcuts } from '../../shortcuts/apps/chrome';

const rules = [
  rule(
    'Chrome navigation',
    ifVimModeEnabled,
    ifApp('com.google.Chrome'),
  ).manipulators(
    Object.values(chromeShortcuts).map((shortcut) =>
      map(...shortcut.from).to(...shortcut.to),
    ),
  ),
];
export default rules;
