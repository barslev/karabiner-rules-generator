import { ifApp } from 'karabiner.ts';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifVimModeEnabled } from '../rules-helpers';
import { warpShortcuts } from '../../shortcuts/apps/warp';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('warp rules', [
    ifVimModeEnabled,
    ifApp('dev.warp.Warp-Stable'),
  ]);
  clickHelperWrapper.registerShortcuts(warpShortcuts);
}
