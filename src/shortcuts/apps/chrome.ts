import { Shortcuts } from '../shortcut-helpers';

type ShortcutsKeys =
  | 'BACK'
  | 'FORWARD'
  | 'GO_TO_URL_BAR'
  | 'SCROLL_PAGE_DOWN'
  | 'SCROLL_PAGE_UP'
  | 'NEW_TAB'
  | 'NEW_WINDOW'
  | 'CLOSE_TAB'
  | 'TAB_LEFT'
  | 'TAB_RIGHT'
  | 'VIMIUM_SEARCH'
  | 'VIMIUM_SEARCH_LINK_NEW_TAB'
  | 'VIMIUM_SEARCH_ALL_TABS'
  | 'MOVE_TAB_TO_NEW_WINDOW'
  | 'OPEN_CLIPBOARD_URL_IN_CURRENT_TAB'
  | 'OPEN_CLIPBOARD_URL_IN_NEW_TAB'
  | 'SEARCH_WEBPAGE'
  | 'RELOAD_WEBPAGE';

export const chromeShortcuts: Shortcuts<ShortcutsKeys> = {
  BACK: {
    from: 'j',
    to: ['left_arrow', { left: '⌘' }],
  },
  FORWARD: {
    from: 'semicolon',
    to: ['right_arrow', { left: '⌘' }],
  },
  GO_TO_URL_BAR: {
    from: 'u',
    to: ['l', { left: '⌘' }],
  },
  SCROLL_PAGE_DOWN: {
    from: ['k', { left: '⌘' }],
    to: ['spacebar', {}],
  },
  SCROLL_PAGE_UP: {
    from: ['l', { left: '⌘' }],
    to: ['spacebar', { left: 'shift' }],
  },
  CLOSE_TAB: {
    from: 'w',
    to: ['w', { left: '⌘' }],
  },
  MOVE_TAB_TO_NEW_WINDOW: {
    from: 'v',
    to: ['w', { left: 'shift' }],
  },
  NEW_TAB: {
    from: 't',
    to: ['t', { left: '⌘' }],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  NEW_WINDOW: {
    from: 'b',
    to: ['n', { left: '⌘' }],
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  OPEN_CLIPBOARD_URL_IN_CURRENT_TAB: {
    from: 'a',
    to: 'p',
  },
  OPEN_CLIPBOARD_URL_IN_NEW_TAB: {
    from: 'd',
    to: ['p', { left: 'shift' }],
  },
  RELOAD_WEBPAGE: {
    from: 'r',
    to: ['r', { left: '⌘' }],
  },
  SEARCH_WEBPAGE: {
    from: 'e',
    to: ['f', { left: '⌘' }],
  },
  TAB_LEFT: {
    from: 'n',
    to: ['left_arrow', { left: '⌘⌥' }],
  },
  TAB_RIGHT: {
    from: 'm',
    to: ['right_arrow', { left: '⌘⌥' }],
  },
  VIMIUM_SEARCH: {
    from: 'f',
    to: 'f',
  },
  VIMIUM_SEARCH_ALL_TABS: {
    from: 'g',
    to: ['t', { left: 'shift' }],
  },
  VIMIUM_SEARCH_LINK_NEW_TAB: {
    from: 's',
    to: ['f', { left: 'shift' }],
  },
};
