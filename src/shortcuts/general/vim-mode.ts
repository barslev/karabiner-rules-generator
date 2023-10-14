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
  | 'RETURN_OR_ENTER'
  // OTHER
  | 'QUIT';

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
    from: 'h',
    to: ['delete_forward', undefined],
  },
  DELETE_CHARACTER_BACKWARD: {
    from: ['h', ['left_command']],
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
    from: 'c',
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
    from: 'p',
    to: ['v', ['left_command']],
  },
  UNDO: {
    from: 'u',
    to: ['z', ['left_command']],
  },
  REDO: {
    from: ['u', ['left_command']],
    to: ['z', ['left_shift', 'left_command']],
  },
  NAVIGATE_LEFT: {
    from: 'j',
    to: ['left_arrow', undefined],
    options: {
      optionalModifiers: ['control', 'option', 'command', 'shift'],
    },
  },
  NAVIGATE_DOWN: {
    from: 'k',
    to: ['down_arrow', undefined],
    options: {
      optionalModifiers: ['control', 'option', 'command', 'shift'],
    },
  },
  NAVIGATE_UP: {
    from: 'l',
    to: ['up_arrow', undefined],
    options: {
      optionalModifiers: ['control', 'option', 'command', 'shift'],
    },
  },
  NAVIGATE_RIGHT: {
    from: 'semicolon',
    to: ['right_arrow', undefined],
    options: {
      optionalModifiers: ['control', 'option', 'command', 'shift'],
    },
  },
  NAVIGATE_WORD_START: {
    from: 's',
    to: ['left_arrow', ['left_option']],
  },
  NAVIGATE_WORD_END: {
    from: 'f',
    to: ['right_arrow', ['left_option']],
  },
  NAVIGATE_LINE_START: {
    from: ['s', 'left_option'],
    to: ['left_arrow', ['left_command']],
  },
  NAVIGATE_LINE_END: {
    from: ['f', 'left_option'],
    to: ['right_arrow', ['left_command']],
  },
  NAVIGATE_PAGE_TOP: {
    from: ['s', 'right_option'],
    to: ['left_arrow', ['fn', 'left_command']],
  },
  NAVIGATE_PAGE_BOTTOM: {
    from: ['f', 'right_option'],
    to: ['right_arrow', ['fn', 'left_command']],
  },
  COMMAND_V: {
    from: ['v', 'left_command'],
    to: ['v', ['left_command']],
  },
  COMMAND_C: {
    from: ['c', 'left_command'],
    to: ['c', ['left_command']],
  },
  COMMAND_Z: {
    from: ['z', 'left_command'],
    to: ['z', ['left_command']],
  },
  COMMAND_SHIFT_Z: {
    from: ['z', ['left_shift', 'left_command']],
    to: ['z', ['left_shift', 'left_command']],
  },
  COMMAND_F: {
    from: ['f', 'left_command'],
    to: ['f', ['left_command']],
    options: { disableVimMode: true },
  },
  COMMAND_A: {
    from: ['a', 'left_command'],
    to: ['a', ['left_command']],
  },
  COMMAND_I: {
    from: ['i', 'left_command'],
    to: ['i', ['left_command']],
    options: { disableVimMode: true },
  },
  COMMAND_R: {
    from: ['r', 'left_command'],
    to: ['r', ['left_command']],
    options: { disableVimMode: true },
  },
  ESCAPE: {
    from: 'grave_accent_and_tilde',
    to: 'escape',
  },
  RETURN_OR_ENTER: {
    from: 'slash',
    to: 'return_or_enter',
  },
  QUIT: {
    from: 'q',
    to: ['q', 'left_command'],
  },
};
