import { Shortcuts, ToKey } from '../shortcut-helpers';
import { ManipulatorBuilder } from '../../lib-extensions/click-helper';
import { toKey } from 'karabiner.ts';

type IntelliJShortcutsKeys =
  | 'BACK'
  | 'FORWARD'
  | 'SCROLL_DOWN'
  | 'SCROLL_UP'
  | 'NEW_FILE'
  | 'NEW_DIRECTORY'
  | 'SELECT_IN'
  | 'GO_TO_TYPE_DECLARATION'
  | 'FIND_USAGES'
  | 'GO_TO_DEFINITION_OR_USAGES'
  | 'RECENT_FILES'
  | 'SEARCH_STRUCTURE'
  | 'SEARCH_SYMBOLS'
  | 'SEARCH_FILES'
  | 'SEARCH_CLASS'
  | 'SHOW_CONTEXT_MENU'
  | 'PREVIOUS_ERROR'
  | 'NEXT_ERROR'
  | 'EXTRACT_VARIABLE'
  | 'EXTRACT_METHOD'
  | 'RENAME'
  | 'SEARCH_ACE_JUMP'
  | 'SEARCH_ACE_JUMP_TARGET'
  | 'SEARCH_ACE_JUMP_LINE'
  | 'NEW_LINE_UNDER_CURSOR'
  | 'JUMP_TO_TERMINAL'
  | 'MOVE_LINE_UP'
  | 'MOVE_LINE_DOWN'
  | 'DUPLICATE_SELECTION'
  | 'DUPLICATE_LINE'
  | 'COLUMN_SELECTION_MODE'
  | 'GIT_BRANCHES'
  | 'GIT_FETCH'
  | 'GIT_COMMIT'
  | 'GIT_COMMIT_MESSAGE'
  | 'GIT_PUSH'
  | 'GIT_PULL'
  | 'GIT_NEW_BRANCH'
  | 'GIT_OPEN_ON_GITHUB'
  | 'EXPAND_BLOCK_SELECTION'
  | 'DECREASE_BLOCK_SELECTION'
  | 'DELETE_LINE'
  | 'NEXT_CHANGE'
  | 'PREVIOUS_CHANGE'
  | 'RERUN_LAST_TERMINAL_COMMAND'
  | 'GO_TO_LINE'
  | 'NEXT_USAGE'
  | 'PREVIOUS_USAGE';

export const intelliJShortcuts: Shortcuts<IntelliJShortcutsKeys> = {
  BACK: {
    from: 'n',
    to: ['left_arrow', { left: '⌘⌥' }],
  },
  FORWARD: {
    from: 'm',
    to: ['right_arrow', { left: '⌘⌥' }],
  },
  EXPAND_BLOCK_SELECTION: {
    from: 'comma',
    to: ['w', 'left_command'],
  },
  DECREASE_BLOCK_SELECTION: {
    from: ['comma', 'left_option'],
    to: ['w', ['left_command', 'left_shift']],
  },
  COLUMN_SELECTION_MODE: {
    from: 'quote,s',
    to: ['8', ['left_command', 'left_shift']],
  },
  DUPLICATE_SELECTION: {
    from: 'a,quote',
    to: ['d', ['left_shift', 'left_command']],
  },
  DUPLICATE_LINE: {
    from: 'a,semicolon',
    to: ['d', 'left_command'],
  },
  EXTRACT_METHOD: {
    from: 'a,m',
    to: ['m', ['left_command', 'left_option']],
  },
  EXTRACT_VARIABLE: {
    from: 'a,v',
    to: ['v', ['left_command', 'left_option']],
  },
  FIND_USAGES: {
    from: 'a,u',
    to: ['b', ['left_command', 'left_shift']],
  },
  GIT_BRANCHES: {
    from: 'period,j',
    to: ['b', 'left_option'],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  GIT_COMMIT: {
    from: 'period,k',
    to: (x: ManipulatorBuilder) =>
      x
        .to('k', ['left_command', 'left_control', 'left_option'])
        .toDelayedAction(toKey('tab', 'left_shift'), [])
        .toDelayedAction(toKey('down_arrow'), [])
        .toDelayedAction(toKey('return_or_enter'), [])
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 100 }),
  },
  GIT_COMMIT_MESSAGE: {
    from: 'period,semicolon',
    to: ['k', ['left_command', 'left_control', 'left_option']],
    options: { disableVimMode: true },
  },
  GIT_FETCH: {
    from: 'period,f',
    to: ['f', ['left_option', 'left_shift']],
  },
  GIT_NEW_BRANCH: {
    from: 'period,n',
    to: ['n', ['left_option', 'left_command']],
  },
  GIT_OPEN_ON_GITHUB: {
    from: 'period,g',
    to: ['y', ['left_shift', 'left_command', 'left_control']],
  },
  GIT_PULL: {
    from: 'period,d',
    to: ['l', ['left_command', 'left_shift', 'left_option', 'left_control']],
  },
  GIT_PUSH: {
    from: 'period,l',
    to: ['p', ['left_command', 'left_control', 'left_shift']],
  },
  GO_TO_DEFINITION_OR_USAGES: {
    from: 'w',
    to: ['b', 'left_command'],
  },
  GO_TO_TYPE_DECLARATION: {
    from: 'a,t',
    to: ['b', ['left_command', 'left_shift']],
  },
  JUMP_TO_TERMINAL: {
    from: 'caps_lock,t',
    to: ['f12', 'left_option'],
  },
  MOVE_LINE_DOWN: {
    from: ['k', 'left_command'],
    to: ['down_arrow', ['left_option', 'left_shift']],
  },
  MOVE_LINE_UP: {
    from: ['l', 'left_command'],
    to: ['up_arrow', ['left_option', 'left_shift']],
  },
  NEW_DIRECTORY: {
    from: 'caps_lock,d',
    to: ['d', 'left_option'],
  },
  NEW_FILE: {
    from: 'caps_lock,f',
    to: ['n', ['left_command', 'left_shift', 'left_option']],
  },
  NEW_LINE_UNDER_CURSOR: {
    from: 'caps_lock,c',
    to: ['x', ['left_option', 'left_control']],
  },
  NEXT_ERROR: {
    from: ['m', 'left_option'],
    to: ['f2', []],
  },
  PREVIOUS_ERROR: {
    from: ['n', 'left_option'],
    to: ['f2', 'left_shift'],
  },
  RECENT_FILES: {
    from: 'e',
    to: ['e', ['left_option', 'left_command']],
    options: {
      disableVimMode: true,
      returnToVimOnEnter: true,
    },
  },
  RENAME: {
    from: 'a,r',
    to: ['f6', 'left_shift'],
  },
  SCROLL_DOWN: {
    from: ['k', 'left_option'],
    to: ['k', ['left_command', 'left_shift']],
  },
  SCROLL_UP: {
    from: ['l', 'left_option'],
    to: ['i', ['left_command', 'left_shift']],
  },
  SEARCH_ACE_JUMP: {
    from: 'a,f',
    to: ['quote', ['left_option', 'left_command']],
    options: { disableVimMode: true },
  },
  SEARCH_ACE_JUMP_LINE: {
    from: 'r',
    to: ['f', ['left_control', 'left_option', 'left_command']],
    options: { disableVimMode: true },
  },
  SEARCH_ACE_JUMP_TARGET: {
    from: 'g',
    to: ['semicolon', ['left_option', 'left_command']],
    options: { disableVimMode: true },
  },
  SEARCH_CLASS: {
    from: 'caps_lock,u',
    to: ['o', ['left_control', 'left_shift', 'left_command', 'left_option']],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  SEARCH_FILES: {
    from: 'caps_lock,i',
    to: ['o', ['left_shift', 'left_command']],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  SEARCH_STRUCTURE: {
    from: 'caps_lock,o',
    to: ['o', 'left_option'],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  SEARCH_SYMBOLS: {
    from: 'caps_lock,p',
    to: ['o', ['left_option', 'left_command']],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  SELECT_IN: {
    from: 'caps_lock,w',
    to: ['f1', 'left_option'],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  SHOW_CONTEXT_MENU: {
    from: 'z',
    to: ['p', 'left_control'],
  },
  DELETE_LINE: {
    from: 'a+l',
    to: ['delete_or_backspace', 'left_command'],
  },
  NEXT_CHANGE: {
    from: ['m', 'left_command'],
    to: ['down_arrow', ['left_control', 'left_shift', 'left_option']],
  },
  PREVIOUS_CHANGE: {
    from: ['n', 'left_command'],
    to: ['up_arrow', ['left_control', 'left_shift', 'left_option']],
  },
  RERUN_LAST_TERMINAL_COMMAND: {
    from: 'a,y',
    to: (x: ManipulatorBuilder) =>
      x
        .to(...(intelliJShortcuts.JUMP_TO_TERMINAL.to as ToKey))
        .toDelayedAction(toKey('up_arrow'), [])
        .toDelayedAction(toKey('return_or_enter'), [])
        .toDelayedAction(toKey('escape'), [])
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 100 }),
  },
  GO_TO_LINE: {
    from: 'a,j',
    to: ['l', 'left_command'],
  },
  NEXT_USAGE: {
    from: 'caps_lock+k',
    to: 'f7',
  },
  PREVIOUS_USAGE: {
    from: 'caps_lock+l',
    to: ['f7', 'left_shift'],
  },
};
