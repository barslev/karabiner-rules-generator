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
    from: ['j', undefined, undefined],
    to: ['left_arrow', ['left_shift']],
  },
  NAVIGATE_DOWN: {
    from: ['k', undefined, undefined],
    to: ['down_arrow', ['left_shift']],
  },
  NAVIGATE_UP: {
    from: ['l', undefined, undefined],
    to: ['up_arrow', ['left_shift']],
  },
  NAVIGATE_RIGHT: {
    from: ['semicolon', undefined, undefined],
    to: ['right_arrow', ['left_shift']],
  },
  NAVIGATE_WORD_START: {
    from: ['s', undefined, undefined],
    to: ['left_arrow', ['left_shift', 'left_option']],
  },
  NAVIGATE_WORD_END: {
    from: ['f', undefined, undefined],
    to: ['right_arrow', ['left_shift', 'left_option']],
  },
  NAVIGATE_LINE_START: {
    from: ['s', 'left_option', undefined],
    to: ['left_arrow', ['left_shift', 'left_command']],
  },
  NAVIGATE_LINE_END: {
    from: ['f', 'left_option', undefined],
    to: ['right_arrow', ['left_shift', 'left_command']],
  },
  COPY_SELECTION: {
    from: ['y', undefined, undefined],
    to: ['c', ['left_command']],
    options: { enableVimMode: true },
  },
  CUT_SELECTION: {
    from: ['c', undefined, undefined],
    to: ['x', ['left_command']],
    options: { enableVimMode: true },
  },
  DELETE_SELECTION: {
    from: ['d', undefined, undefined],
    to: ['delete_or_backspace', undefined],
    options: { enableVimMode: true },
  },
};
