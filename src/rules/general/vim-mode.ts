import { ifVimModeEnabled } from './mode-switching';
import { rule } from 'karabiner.ts';
import { ClickHelper } from '../../lib-extensions/click-helper';
import { vimModeShortcuts } from '../../shortcuts/general/vim-mode';

const clickHelper = new ClickHelper();
clickHelper.registerShortcuts(vimModeShortcuts);
const rules = [
  rule('Vim mode rules', ifVimModeEnabled).manipulators(
    clickHelper.getManipulators(),
  ),
];

export default rules;
