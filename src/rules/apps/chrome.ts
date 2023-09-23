import { ifVimModeEnabled } from '../general/mode-switching';
import { ifApp, rule } from 'karabiner.ts';
import { chromeShortcuts } from '../../shortcuts/apps/chrome';
import { getManipulators } from '../rules-helpers';

const rules = [
  rule(
    'Chrome navigation',
    ifVimModeEnabled,
    ifApp('com.google.Chrome'),
  ).manipulators([...getManipulators(chromeShortcuts)]),
];
export default rules;
