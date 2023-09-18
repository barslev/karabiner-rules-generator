import { writeToProfile } from 'karabiner.ts';
import modeSwitchingRules from './rules/general/mode-switching';
import intelliJRules from './rules/apps/intelliJ';
import appSwitchingRules from './rules/general/app-switching';

writeToProfile('Default profile', [
  ...modeSwitchingRules,
  ...intelliJRules,
  ...appSwitchingRules,
]);
