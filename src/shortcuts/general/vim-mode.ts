import { Shortcuts } from '../shortcut-helpers';

type VimModeShortcutsKeys =
  // DELETION
  | 'DELETE_WORD_START'
  | 'DELETE_WORD_END'
  | 'DELETE_LINE_START'
  | 'DELETE_LINE_END'
  | 'DELETE_CHARACTER_FORWARD'
  | 'DELETE_CHARACTER_BACKWARD'
  // COPYING
  | 'COPY_LINE'
  | 'COPY_WORD_END'
  | 'COPY_WORD_START'
  | 'COPY_LINE_END'
  | 'COPY_LINE_START'
  | 'COPY_SELECTION'
  // CUTTING
  | 'CUT_LINE'
  | 'CUT_WORD_END'
  | 'CUT_WORD_START'
  | 'CUT_LINE_END'
  | 'CUT_LINE_START'
  // PASTING and UNDOING/REDOING
  | 'PASTE'
  | 'UNDO'
  | 'REDO'
  // NAVIGATION
  | 'NAVIGATE_LEFT'
  | 'NAVIGATE_DOWN'
  | 'NAVIGATE_UP'
  | 'NAVIGATE_RIGHT'
  | 'NAVIGATE_WORD_START'
  | 'NAVIGATE_WORD_END'
  | 'NAVIGATE_LINE_START'
  | 'NAVIGATE_LINE_END'
  | 'NAVIGATE_PAGE_TOP'
  | 'NAVIGATE_PAGE_BOTTOM'
  // NORMAL COMMAND KEY COMBINATIONS
  | 'COMMAND_V'
  | 'COMMAND_C'
  | 'COMMAND_Z'
  | 'COMMAND_SHIFT_Z'
  | 'COMMAND_F'
  | 'COMMAND_A'
  | 'COMMAND_I'
  | 'COMMAND_R'
  | 'ESCAPE'
  | 'RETURN_OR_ENTER';

export const vimModeShortcuts: Shortcuts<VimModeShortcutsKeys> = {
  DELETE_WORD_START: {
    from: 'd+s',
    to: (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
  },
  DELETE_WORD_END: {
    from: 'd+f',
    to: (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
  },
  DELETE_LINE_START: {
    from: 'd+a',
    to: (x) =>
      x
        .to('left_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']),
  },
  DELETE_LINE_END: {
    from: 'd+g',
    to: (x) =>
      x
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']),
  },
  DELETE_CHARACTER_FORWARD: {
    from: ['h', undefined, undefined],
    to: ['delete_forward', undefined],
  },
  DELETE_CHARACTER_BACKWARD: {
    from: ['h', ['left_command'], undefined],
    to: ['delete_or_backspace', undefined],
  },
  COPY_LINE: {
    from: 'y,y',
    to: (x) =>
      x
        .to('left_arrow', ['left_command'])
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('c', ['left_command']),
  },
  COPY_WORD_END: {
    from: 'y,f',
    to: (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('c', ['left_command']),
  },
  COPY_WORD_START: {
    from: 'y,s',
    to: (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('c', ['left_command']),
  },
  COPY_LINE_END: {
    from: 'y,g',
    to: (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_command'])
        .to('c', ['left_command']),
  },
  COPY_LINE_START: {
    from: 'y,a',
    to: (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_command'])
        .to('c', ['left_command']),
  },
  COPY_SELECTION: {
    from: ['c', undefined, undefined],
    to: ['c', ['left_command']],
  },
  CUT_LINE: {
    from: 'c,l',
    to: (x) =>
      x
        .to('left_arrow', ['left_command'])
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']),
  },
  CUT_WORD_END: {
    from: 'c,f',
    to: (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
  },
  CUT_WORD_START: {
    from: 'c,s',
    to: (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
  },
  CUT_LINE_END: {
    from: 'c,g',
    to: (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_command'])
        .to('x', ['left_command']),
  },
  CUT_LINE_START: {
    from: 'c,a',
    to: (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_command'])
        .to('x', ['left_command']),
  },
  PASTE: {
    from: ['p', undefined, undefined],
    to: ['v', ['left_command']],
  },
  UNDO: {
    from: ['u', undefined, undefined],
    to: ['z', ['left_command']],
  },
  REDO: {
    from: ['u', ['left_command'], undefined],
    to: ['z', ['left_shift', 'left_command']],
  },
  NAVIGATE_LEFT: {
    from: ['j', undefined, ['control', 'option', 'command', 'shift']],
    to: ['left_arrow', undefined],
  },
  NAVIGATE_DOWN: {
    from: ['k', undefined, ['control', 'option', 'command', 'shift']],
    to: ['down_arrow', undefined],
  },
  NAVIGATE_UP: {
    from: ['l', undefined, ['control', 'option', 'command', 'shift']],
    to: ['up_arrow', undefined],
  },
  NAVIGATE_RIGHT: {
    from: ['semicolon', undefined, ['control', 'option', 'command', 'shift']],
    to: ['right_arrow', undefined],
  },
  NAVIGATE_WORD_START: {
    from: ['s', undefined, undefined],
    to: ['left_arrow', ['left_option']],
  },
  NAVIGATE_WORD_END: {
    from: ['f', undefined, undefined],
    to: ['right_arrow', ['left_option']],
  },
  NAVIGATE_LINE_START: {
    from: ['s', 'left_option', undefined],
    to: ['left_arrow', ['left_command']],
  },
  NAVIGATE_LINE_END: {
    from: ['f', 'left_option', undefined],
    to: ['right_arrow', ['left_command']],
  },
  NAVIGATE_PAGE_TOP: {
    from: ['s', 'right_option', undefined],
    to: ['left_arrow', ['fn', 'left_command']],
  },
  NAVIGATE_PAGE_BOTTOM: {
    from: ['f', 'right_option', undefined],
    to: ['right_arrow', ['fn', 'left_command']],
  },
  COMMAND_V: {
    from: ['v', 'left_command', undefined],
    to: ['v', ['left_command']],
  },
  COMMAND_C: {
    from: ['c', 'left_command', undefined],
    to: ['c', ['left_command']],
  },
  COMMAND_Z: {
    from: ['z', 'left_command', undefined],
    to: ['z', ['left_command']],
  },
  COMMAND_SHIFT_Z: {
    from: ['z', ['left_shift', 'left_command'], undefined],
    to: ['z', ['left_shift', 'left_command']],
  },
  COMMAND_F: {
    from: ['f', 'left_command', undefined],
    to: ['f', ['left_command']],
    options: { disableVimMode: true },
  },
  COMMAND_A: {
    from: ['a', 'left_command', undefined],
    to: ['a', ['left_command']],
  },
  COMMAND_I: {
    from: ['i', 'left_command', undefined],
    to: ['i', ['left_command']],
    options: { disableVimMode: true },
  },
  COMMAND_R: {
    from: ['r', 'left_command', undefined],
    to: ['r', ['left_command']],
    options: { disableVimMode: true },
  },
  ESCAPE: {
    from: ['grave_accent_and_tilde', undefined, undefined],
    to: ['escape', undefined],
  },
  RETURN_OR_ENTER: {
    from: ['slash', undefined, undefined],
    to: ['return_or_enter', undefined],
  },
};
