import { Shortcuts } from '../shortcut-helpers';

type VSCodeShortcutsKeys =
  | 'BACK'
  | 'FORWARD'
  // | 'SCROLL_DOWN'
  // | 'SCROLL_UP'
  // | 'NEW_FILE'
  // | 'NEW_DIRECTORY'
  // | 'SELECT_IN'
  // | 'GO_TO_TYPE_DECLARATION'
  // | 'FIND_USAGES'
  | 'GO_TO_DEFINITION_OR_USAGES'
  // | 'RECENT_FILES'
  // | 'SEARCH_STRUCTURE'
  // | 'SEARCH_SYMBOLS'
  | 'SEARCH_FILES'
  // | 'SEARCH_CLASS'
  // | 'SHOW_CONTEXT_MENU'
  | 'FOCUS_PROBLEMS_VIEW'
  | 'PREVIOUS_ERROR_IN_FILE'
  | 'NEXT_ERROR_IN_FILE'
  | 'PREVIOUS_ERROR'
  | 'NEXT_ERROR'
  // | 'EXTRACT_VARIABLE'
  // | 'EXTRACT_METHOD'
  // | 'RENAME'
  | 'SEARCH_ACE_JUMP'
  // | 'SEARCH_ACE_JUMP_TARGET'
  // | 'SEARCH_ACE_JUMP_LINE'
  // | 'NEW_LINE_UNDER_CURSOR'
  | 'TOGGLE_TERMINAL'
  | 'MOVE_LINE_UP'
  | 'MOVE_LINE_DOWN'
  | 'DUPLICATE_SELECTION'
  | 'DUPLICATE_LINE'
  | 'COLUMN_SELECTION_MODE'
  // | 'GIT_BRANCHES'
  | 'GIT_FETCH'
  | 'GIT_CHECKOUT'
  // | 'GIT_COMMIT'
  // | 'GIT_COMMIT_MESSAGE'
  | 'GIT_PUSH'
  | 'GIT_PULL'
  | 'GIT_PULL_REQUEST'
  // | 'GIT_NEW_BRANCH'
  // | 'GIT_OPEN_ON_GITHUB'
  // | 'GIT_ROLL_BACK'
  | 'GIT_STASH'
  | 'GIT_UNSTASH'
  | 'GIT_ROLLBACK'
  | 'EXPAND_BLOCK_SELECTION'
  | 'DECREASE_BLOCK_SELECTION'
  // | 'DELETE_LINE'
  | 'NEXT_CHANGE'
  | 'PREVIOUS_CHANGE'
  // | 'RERUN_LAST_TERMINAL_COMMAND'
  | 'GO_TO_LINE'
  | 'GO_TO_MATCHING_BRACKET'
  // | 'NEXT_USAGE'
  // | 'PREVIOUS_USAGE';*/
  | 'TOGGLE_LINE_COMMENT'
  | 'TOGGLE_BLOCK_COMMENT'
  | 'COMMAND_PALETTE'
  | 'OPEN_SOURCE_CONTROL_VIEW'
  | 'SPLIT_EDITOR_LEFT'
  | 'SPLIT_EDITOR_DOWN'
  | 'SPLIT_EDITOR_UP'
  | 'SPLIT_EDITOR_RIGHT'
  | 'CLOSE_FILE'
  | 'CLOSE_EDITOR_GROUP'
  | 'GO_TO_GROUP_1'
  | 'GO_TO_GROUP_2'
  | 'GO_TO_GROUP_3'
  | 'GO_TO_GROUP_4'
  | 'GO_TO_GROUP_5'
  | 'SYMBOL_IN_EDITOR'
  | 'SYMBOL_IN_WORKSPACE'
  | 'RENAME_SYMBOL'
  | 'SAVE'
  | 'TURBO_CONSOLE_LOG_ADD'
  | 'TURBO_CONSOLE_LOG_COMMENT'
  | 'TURBO_CONSOLE_LOG_UNCOMMENT'
  | 'TURBO_CONSOLE_LOG_DELETE'
  | 'REVEAL_FILE_IN_EXPLORER'
  | 'DELETE_LINE'
  | 'OPEN_SETTINGS'
  | 'OPEN_REFACTOR'
  | 'SURROUND_WITH';

export const vscodeShortcuts: Shortcuts<VSCodeShortcutsKeys> = {
  BACK: {
    from: 'n',
    to: ['j', { left: '⌘⌥' }],
  },
  FORWARD: {
    from: 'm',
    to: ['semicolon', { left: '⌘⌥' }],
  },
  EXPAND_BLOCK_SELECTION: {
    from: 'comma',
    to: ['right_arrow', ['left_control', 'left_shift']],
  },
  DECREASE_BLOCK_SELECTION: {
    from: ['comma', 'left_command'],
    to: ['left_arrow', ['left_control', 'left_shift']],
  },
  COLUMN_SELECTION_MODE: {
    from: ['c', 'left_option'],
    to: ['8', ['left_command', 'left_shift']],
  },
  DUPLICATE_SELECTION: {
    from: ['d', 'left_option'],
    to: ['d', ['left_shift', 'left_command']],
  },
  DUPLICATE_LINE: {
    from: ['d', 'left_command'],
    to: ['down_arrow', ['left_shift', 'left_option']],
  },
  //   EXTRACT_METHOD: {
  //     from: 'a,m',
  //     to: ['m', ['left_command', 'left_option']],
  //   },
  //   EXTRACT_VARIABLE: {
  //     from: 'a,v',
  //     to: ['v', ['left_command', 'left_option']],
  //   },
  //   FIND_USAGES: {
  //     from: 'a,u',
  //     to: ['b', ['left_command', 'left_shift']],
  //   },
  //   GIT_BRANCHES: {
  //     from: 'period,j',
  //     to: ['b', 'left_option'],
  //     options: { disableVimMode: true, returnToVimOnEnter: true },
  //   },
  //   GIT_COMMIT: {
  //     from: 'period,k',
  //     to: (x: ManipulatorBuilder) =>
  //       x
  //         .to('k', ['left_command', 'left_control', 'left_option'])
  //         .toDelayedAction(toKey('tab', 'left_shift'), [])
  //         .toDelayedAction(toKey('down_arrow'), [])
  //         .toDelayedAction(toKey('return_or_enter'), [])
  //         .parameters({ 'basic.to_delayed_action_delay_milliseconds': 100 }),
  //   },
  //   GIT_COMMIT_MESSAGE: {
  //     from: 'period,semicolon',
  //     to: ['k', ['left_command', 'left_control', 'left_option']],
  //     options: { disableVimMode: true },
  //   },
  GIT_FETCH: {
    from: 'period,f',
    to: ['f', ['left_control', 'left_shift', 'left_command']],
  },
  GIT_CHECKOUT: {
    from: 'period,c',
    to: ['c', ['left_control', 'left_shift', 'left_command']],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  //   GIT_NEW_BRANCH: {
  //     from: 'period,n',
  //     to: ['n', ['left_option', 'left_command']],
  //   },
  //   GIT_OPEN_ON_GITHUB: {
  //     from: 'period,g',
  //     to: ['y', ['left_shift', 'left_command', 'left_control']],
  //   },
  GIT_PULL: {
    from: 'period,d',
    to: ['d', ['left_command', 'left_shift', 'left_control']],
  },
  GIT_PULL_REQUEST: {
    from: 'period,p',
    to: ['p', ['left_command', 'left_option', 'left_control']],
  },
  GIT_PUSH: {
    from: 'period,l',
    to: ['k', ['left_command', 'left_control']],
  },
  //   GIT_ROLL_BACK: {
  //     from: 'period,r',
  //     to: ['z', ['left_command', 'left_option']],
  //   },
  GIT_STASH: {
    from: 'period,s',
    to: ['s', ['left_control', 'left_command', 'left_option']],
  },
  GIT_UNSTASH: {
    from: 'period,u',
    to: ['u', ['left_control', 'left_command', 'left_option']],
  },
  GIT_ROLLBACK: {
    from: 'period,r',
    to: ['z', ['left_control', 'left_command', 'left_option']],
  },
  GO_TO_DEFINITION_OR_USAGES: {
    from: 'e',
    to: 'f12',
  },
  //   GO_TO_TYPE_DECLARATION: {
  //     from: 'a,t',
  //     to: ['b', ['left_command', 'left_shift']],
  //   },
  TOGGLE_TERMINAL: {
    from: 't',
    to: ['t', ['left_option', 'left_shift']],
  },
  MOVE_LINE_DOWN: {
    from: ['k', 'left_command'],
    to: ['down_arrow', ['left_option']],
  },
  MOVE_LINE_UP: {
    from: ['l', 'left_command'],
    to: ['up_arrow', ['left_option']],
  },
  //   NEW_DIRECTORY: {
  //     from: 'caps_lock,d',
  //     to: ['d', 'left_option'],
  //   },
  //   NEW_FILE: {
  //     from: 'caps_lock,f',
  //     to: ['n', ['left_command', 'left_shift', 'left_option']],
  //   },
  //   NEW_LINE_UNDER_CURSOR: {
  //     from: 'caps_lock,c',
  //     to: ['x', ['left_option', 'left_control']],
  //   },
  FOCUS_PROBLEMS_VIEW: {
    from: ['p', 'left_option'],
    to: ['m', ['left_command', 'left_shift']],
  },
  NEXT_ERROR: {
    from: ['m', 'left_control'],
    to: ['f8', []],
  },
  PREVIOUS_ERROR: {
    from: ['n', 'left_control'],
    to: ['f8', 'left_shift'],
  },
  NEXT_ERROR_IN_FILE: {
    from: ['m', 'left_option'],
    to: ['f8', ['left_option']],
  },
  PREVIOUS_ERROR_IN_FILE: {
    from: ['n', 'left_option'],
    to: ['f8', ['left_shift', 'left_option']],
  },
  //   RECENT_FILES: {
  //     from: 'e',
  //     to: ['e', ['left_option', 'left_command']],
  //     options: {
  //       disableVimMode: true,
  //       returnToVimOnEnter: true,
  //     },
  //   },
  //   RENAME: {
  //     from: 'a,r',
  //     to: ['f6', 'left_shift'],
  //   },
  //   SCROLL_DOWN: {
  //     from: ['k', 'left_option'],
  //     to: ['k', ['left_command', 'left_shift']],
  //   },
  //   SCROLL_UP: {
  //     from: ['l', 'left_option'],
  //     to: ['i', ['left_command', 'left_shift']],
  //   },
  SEARCH_ACE_JUMP: {
    from: 'g',
    to: ['return_or_enter', ['left_shift']],
    options: { disableVimMode: true },
  },
  //   SEARCH_ACE_JUMP_LINE: {
  //     from: 'r',
  //     to: ['f', ['left_control', 'left_option', 'left_command']],
  //     options: { disableVimMode: true },
  //   },
  //   SEARCH_ACE_JUMP_TARGET: {
  //     from: 'g',
  //     to: ['semicolon', ['left_option', 'left_command']],
  //     options: { disableVimMode: true },
  //   },
  //   SEARCH_CLASS: {
  //     from: 'caps_lock,u',
  //     to: ['o', ['left_control', 'left_shift', 'left_command', 'left_option']],
  //     options: { disableVimMode: true, returnToVimOnEnter: true },
  //   },
  SEARCH_FILES: {
    from: 'p',
    to: ['p', ['left_command']],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  //   SEARCH_STRUCTURE: {
  //     from: 'caps_lock,o',
  //     to: ['o', 'left_option'],
  //     options: { disableVimMode: true, returnToVimOnEnter: true },
  //   },
  //   SEARCH_SYMBOLS: {
  //     from: 'caps_lock,p',
  //     to: ['o', ['left_option', 'left_command']],
  //     options: { disableVimMode: true, returnToVimOnEnter: true },
  //   },
  //   SELECT_IN: {
  //     from: 'caps_lock,w',
  //     to: ['f1', 'left_option'],
  //     options: { disableVimMode: true, returnToVimOnEnter: true },
  //   },
  //   SHOW_CONTEXT_MENU: {
  //     from: 'z',
  //     to: ['p', 'left_control'],
  //   },
  //   DELETE_LINE: {
  //     from: 'a+l',
  //     to: ['delete_or_backspace', 'left_command'],
  //   },
  NEXT_CHANGE: {
    from: ['m', 'left_command'],
    to: ['down_arrow', ['left_control', 'left_shift', 'left_option']],
  },
  PREVIOUS_CHANGE: {
    from: ['n', 'left_command'],
    to: ['up_arrow', ['left_control', 'left_shift', 'left_option']],
  },
  //   RERUN_LAST_TERMINAL_COMMAND: {
  //     from: 'a,y',
  //     to: (x: ManipulatorBuilder) =>
  //       x
  //         .to(...(vscodeShortcuts.JUMP_TO_TERMINAL.to as ToKey))
  //         .toDelayedAction(toKey('up_arrow'), [])
  //         .toDelayedAction(toKey('return_or_enter'), [])
  //         .toDelayedAction(toKey('escape'), [])
  //         .parameters({ 'basic.to_delayed_action_delay_milliseconds': 100 }),
  //   },
  GO_TO_LINE: {
    from: ['l', 'left_command'],
    to: ['l', 'left_command'],
  },
  GO_TO_MATCHING_BRACKET: {
    from: 'b',
    to: ['b', ['left_command', 'left_control', 'left_option']],
  },
  //   NEXT_USAGE: {
  //     from: 'caps_lock+k',
  //     to: 'f7',
  //   },
  //   PREVIOUS_USAGE: {
  //     from: 'caps_lock+l',
  //     to: ['f7', 'left_shift'],
  //   },

  TOGGLE_LINE_COMMENT: {
    from: '7',
    to: ['7', ['left_option']],
  },
  TOGGLE_BLOCK_COMMENT: {
    from: ['7', ['left_shift']],
    to: ['7', ['left_command', 'left_option']],
  },
  COMMAND_PALETTE: {
    from: ['p', ['left_command']],
    to: ['p', ['left_shift', 'left_command']],
    options: {
      returnToVimOnEnter: true,
      disableVimMode: true,
    },
  },
  OPEN_SOURCE_CONTROL_VIEW: {
    from: 'period,period',
    to: ['g', ['left_shift', 'left_option']],
  },
  SPLIT_EDITOR_RIGHT: {
    from: ['semicolon', ['left_option']],
    to: ['semicolon', ['left_control', 'left_option', 'left_command']],
  },
  SPLIT_EDITOR_DOWN: {
    from: ['k', ['left_option']],
    to: ['k', ['left_control', 'left_option', 'left_command']],
  },
  SPLIT_EDITOR_LEFT: {
    from: ['j', ['left_option']],
    to: ['j', ['left_control', 'left_option', 'left_command']],
  },
  SPLIT_EDITOR_UP: {
    from: ['l', ['left_option']],
    to: ['l', ['left_control', 'left_option', 'left_command']],
  },
  CLOSE_EDITOR_GROUP: {
    from: ['w', ['left_option']],
    to: ['w', ['left_option']],
  },
  CLOSE_FILE: {
    from: 'w',
    to: ['w', ['left_command']],
  },
  GO_TO_GROUP_1: {
    from: ['1', ['left_command']],
    to: ['1', ['left_command']],
  },
  GO_TO_GROUP_2: {
    from: ['2', ['left_command']],
    to: ['2', ['left_command']],
  },
  GO_TO_GROUP_3: {
    from: ['3', ['left_command']],
    to: ['3', ['left_command']],
  },
  GO_TO_GROUP_4: {
    from: ['4', ['left_command']],
    to: ['4', ['left_command']],
  },
  GO_TO_GROUP_5: {
    from: ['5', ['left_command']],
    to: ['5', ['left_command']],
  },
  SYMBOL_IN_EDITOR: {
    from: ['quote', ['left_command']],
    to: ['o', ['left_shift', 'left_command']],
    options: {
      disableVimMode: true,
      returnToVimOnEnter: true,
    },
  },
  SYMBOL_IN_WORKSPACE: {
    from: 'quote',
    to: ['t', ['left_command']],
    options: {
      disableVimMode: true,
      returnToVimOnEnter: true,
    },
  },
  RENAME_SYMBOL: {
    from: 'r',
    to: ['r', 'left_control'],
    options: {
      disableVimMode: true,
      returnToVimOnEnter: true,
    },
  },
  SAVE: {
    from: ['s', ['left_command']],
    to: ['s', ['left_command']],
  },
  TURBO_CONSOLE_LOG_ADD: {
    from: 'a,l',
    to: ['l', ['left_control', 'left_option']],
  },
  TURBO_CONSOLE_LOG_COMMENT: {
    from: 'a,c',
    to: ['c', ['left_shift', 'left_option']],
  },
  TURBO_CONSOLE_LOG_UNCOMMENT: {
    from: 'a,u',
    to: ['u', ['left_shift', 'left_option']],
  },
  TURBO_CONSOLE_LOG_DELETE: {
    from: 'a,d',
    to: ['d', ['left_shift', 'left_option']],
  },
  REVEAL_FILE_IN_EXPLORER: {
    from: ['e', ['left_command']],
    to: ['e', ['left_command', 'left_option']],
  },
  DELETE_LINE: {
    from: ['e', ['left_option']],
    to: ['k', ['left_shift', 'left_command']],
  },
  OPEN_SETTINGS: {
    from: ['comma', ['left_command']],
    to: ['comma', ['left_command']],
  },
  OPEN_REFACTOR: {
    from: ['period', ['left_command']],
    to: ['period', ['left_command']],
  },
  SURROUND_WITH: {
    from: 'z',
    to: ['t', ['left_command', 'left_shift']],
    options: {
      disableVimMode: true,
      returnToVimOnEnter: true,
    },
  },
};
