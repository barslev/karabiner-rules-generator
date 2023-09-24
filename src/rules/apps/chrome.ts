import { ifVimModeEnabled } from '../general/mode-switching';
import { ifApp, rule } from 'karabiner.ts';
import { chromeShortcuts } from '../../shortcuts/apps/chrome';
import { getManipulators } from '../rules-helpers';
import { ClickHelper } from '../../lib-extensions/click-helper';

const clickHelper = new ClickHelper();
const rules = [
  rule(
    'Chrome navigation',
    ifVimModeEnabled,
    ifApp('com.google.Chrome'),
  ).manipulators([
    ...getManipulators(chromeShortcuts, clickHelper),
    ...clickHelper.getPostProcessManipulators(),
  ]),
];
export default rules;
