import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { getDisableUnusedKeysRule, ifNotNormalMode } from '../rules-helpers';

export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.addRule(
    getDisableUnusedKeysRule(ifNotNormalMode, 'vim mode'),
  );
}
