import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';

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
type ShortcutsType = Record<
  ShortcutsKeys,
  {
    from: [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined];
    to: [ToKeyParam, ModifierParam | undefined];
  }
>;
export const chromeShortcuts: ShortcutsType = {
  BACK: {
    from: ['j', undefined, undefined],
    to: ['left_arrow', { left: '⌘' }],
  },
  FORWARD: {
    from: ['semicolon', undefined, undefined],
    to: ['right_arrow', { left: '⌘' }],
  },
  GO_TO_URL_BAR: {
    from: ['u', undefined, undefined],
    to: ['l', { left: '⌘' }],
  },
  SCROLL_PAGE_DOWN: {
    from: ['k', { left: '⌘' }, undefined],
    to: ['spacebar', {}],
  },
  SCROLL_PAGE_UP: {
    from: ['l', { left: '⌘' }, undefined],
    to: ['spacebar', { left: 'shift' }],
  },
  CLOSE_TAB: {
    from: ['w', undefined, undefined],
    to: ['w', { left: '⌘' }],
  },
  MOVE_TAB_TO_NEW_WINDOW: {
    from: ['v', undefined, undefined],
    to: ['w', { left: 'shift' }],
  },
  NEW_TAB: {
    from: ['t', undefined, undefined],
    to: ['t', { left: '⌘' }],
  },
  NEW_WINDOW: {
    from: ['b', undefined, undefined],
    to: ['n', { left: '⌘' }],
  },
  OPEN_CLIPBOARD_URL_IN_CURRENT_TAB: {
    from: ['a', undefined, undefined],
    to: ['p', undefined],
  },
  OPEN_CLIPBOARD_URL_IN_NEW_TAB: {
    from: ['d', undefined, undefined],
    to: ['p', { left: 'shift' }],
  },
  RELOAD_WEBPAGE: {
    from: ['r', undefined, undefined],
    to: ['r', { left: '⌘' }],
  },
  SEARCH_WEBPAGE: {
    from: ['e', undefined, undefined],
    to: ['f', { left: '⌘' }],
  },
  TAB_LEFT: {
    from: ['n', undefined, undefined],
    to: ['left_arrow', { left: '⌘⌥' }],
  },
  TAB_RIGHT: {
    from: ['m', undefined, undefined],
    to: ['right_arrow', { left: '⌘⌥' }],
  },
  VIMIUM_SEARCH: {
    from: ['f', undefined, undefined],
    to: ['f', {}],
  },
  VIMIUM_SEARCH_ALL_TABS: {
    from: ['g', undefined, undefined],
    to: ['t', { left: 'shift' }],
  },
  VIMIUM_SEARCH_LINK_NEW_TAB: {
    from: ['s', undefined, undefined],
    to: ['f', { left: 'shift' }],
  },
};
