import { Shortcuts } from '../shortcut-helpers';

type VisualModeShortcutsKeys =
  | 'NAVIGATE_LEFT'
  | 'NAVIGATE_DOWN'
  | 'NAVIGATE_UP'
  | 'NAVIGATE_RIGHT'
  | 'NAVIGATE_WORD_START'
  | 'NAVIGATE_WORD_END'
  | 'NAVIGATE_LINE_START'
  | 'NAVIGATE_LINE_END'
  | 'COPY_SELECTION'
  | 'CUT_SELECTION'
  | 'DELETE_SELECTION';

export const VisualModeShortcuts: Shortcuts<VisualModeShortcutsKeys> = {
  NAVIGATE_LEFT: {
    from: 'j',
    to: ['left_arrow', ['left_shift']],
  },
  NAVIGATE_DOWN: {
    from: 'k',
    to: ['down_arrow', ['left_shift']],
  },
  NAVIGATE_UP: {
    from: 'l',
    to: ['up_arrow', ['left_shift']],
  },
  NAVIGATE_RIGHT: {
    from: 'semicolon',
    to: ['right_arrow', ['left_shift']],
  },
  NAVIGATE_WORD_START: {
    from: 's',
    to: ['left_arrow', ['left_shift', 'left_option']],
  },
  NAVIGATE_WORD_END: {
    from: 'f',
    to: ['right_arrow', ['left_shift', 'left_option']],
  },
  NAVIGATE_LINE_START: {
    from: ['s', 'left_option'],
    to: ['left_arrow', ['left_shift', 'left_command']],
  },
  NAVIGATE_LINE_END: {
    from: ['f', 'left_option'],
    to: ['right_arrow', ['left_shift', 'left_command']],
  },
  COPY_SELECTION: {
    from: 'y',
    to: ['c', ['left_command']],
    options: { enableVimMode: true },
  },
  CUT_SELECTION: {
    from: 'c',
    to: ['x', ['left_command']],
    options: { enableVimMode: true },
  },
  DELETE_SELECTION: {
    from: 'd',
    to: 'delete_or_backspace',
    options: { enableVimMode: true },
  },
};
