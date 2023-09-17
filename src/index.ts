import { writeToProfile } from 'karabiner.ts';
import vimModeRules from './rules/general/general';
import intelliJRules from './rules/apps/intelliJ';

writeToProfile('Default profile', [...vimModeRules, ...intelliJRules]);
