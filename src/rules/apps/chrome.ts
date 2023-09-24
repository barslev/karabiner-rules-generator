import { ifVimModeEnabled } from '../general/mode-switching';
import { ifApp, rule } from 'karabiner.ts';
import { chromeShortcuts } from '../../shortcuts/apps/chrome';
import { ClickHelper } from '../../lib-extensions/click-helper';

const clickHelper = new ClickHelper();
clickHelper.registerShortcuts(chromeShortcuts);
const rules = [
  rule(
    'Chrome navigation',
    ifVimModeEnabled,
    ifApp('com.google.Chrome'),
  ).manipulators(clickHelper.getManipulators()),
];
export default rules;
