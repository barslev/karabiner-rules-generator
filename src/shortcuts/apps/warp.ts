import { Shortcuts } from '../shortcut-helpers';

type WarpShortcutsKeys = 'SELECT_LAUNCH_CONFIG' | 'SEARCH_WORKFLOW';

export const warpShortcuts: Shortcuts<WarpShortcutsKeys> = {
  SELECT_LAUNCH_CONFIG: {
    from: 'h',
    to: ['l', ['left_command', 'left_control']],
  },
  SEARCH_WORKFLOW: {
    from: 'g',
    to: ['r', ['left_command']],
  },
};
