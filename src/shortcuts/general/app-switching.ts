import { FromKeyParam, toKey, toTypeSequence } from 'karabiner.ts';
import { Shortcuts } from '../shortcut-helpers';

const APP_SWITCHING_KEY = 'd';
const TAB_SWITCHING_KEY = 'c';

export type AppSwitchingShortcutsKeys =
  | 'INTELLIJ_KARABINER_RULES_GENERATOR'
  | 'INTELLIJ_KARABINER_COMPLEX_RULES'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_1'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_2'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_3'
  | 'INTELLIJ_JELLY'
  | 'CHROME'
  | 'CHROME_RECIPES'
  | 'CHROME_ADD_TO_SHOPPING_LIST'
  | 'CHROME_SHOPPING_LIST'
  | 'CHROME_GMAIL_PERSONAL'
  | 'CHROME_GMAIL_WORK'
  | 'CHROME_GITHUB_COANA_PACKAGE_MANAGER'
  | 'CHROME_GITHUB_COANA_PACKAGE_MANAGER_PULLS'
  | 'CHROME_GITHUB_JELLY'
  | 'CHROME_NAVIGATION'
  | 'CHROME_GQUEUES_INBOX'
  | 'ONENOTE'
  | 'NOTION'
  | 'LINEAR'
  | 'FIREFOX'
  | 'KEYNOTE'
  | 'SLACK'
  | 'TERMINAL'
  | 'VSCODE'
  | 'KARABINER_ELEMENTS'
  | 'KARABINER_EVENT_VIEWER';

// TODO: The following 4 is not implemented yet
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'f', { shell_command: "open /Users/benjaminbarslevnielsen/Documents/git/jsfixinc"}, vimModeOptions, undefined, getToKeyPress(['w', 'left_command'])),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'x', { shell_command: "open -a 'Google Chrome.app'"}, vimModeOptions, [getToKeyPress(chromeShortcuts.NEW_WINDOW), getToKeyPress(['v', 'left_command']), getToKeyPress(['return_or_enter'])]),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'm', [getToKeyPress(['c', 'left_command']), { shell_command: "open -na 'IntelliJ IDEA.app' --args /Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager-2"}], vimModeOptions, undefined, [getToKeyPress(['f', 'left_command']), getToKeyPress(['v', 'left_command'])]),

export const appSwitchingShortcuts: Record<
  AppSwitchingShortcutsKeys,
  [FromKeyParam, FromKeyParam]
> = {
  INTELLIJ_KARABINER_RULES_GENERATOR: [APP_SWITCHING_KEY, 'y'],
  INTELLIJ_KARABINER_COMPLEX_RULES: [APP_SWITCHING_KEY, 'u'],
  INTELLIJ_COANA_PACKAGE_MANAGER_1: [APP_SWITCHING_KEY, 'i'],
  INTELLIJ_COANA_PACKAGE_MANAGER_2: [APP_SWITCHING_KEY, 'semicolon'],
  INTELLIJ_COANA_PACKAGE_MANAGER_3: [APP_SWITCHING_KEY, 'quote'],
  INTELLIJ_JELLY: [APP_SWITCHING_KEY, 'j'],
  CHROME: [APP_SWITCHING_KEY, 'c'],
  CHROME_RECIPES: [TAB_SWITCHING_KEY, 'o'],
  CHROME_ADD_TO_SHOPPING_LIST: [TAB_SWITCHING_KEY, 't'],
  CHROME_SHOPPING_LIST: [TAB_SWITCHING_KEY, 'i'],
  CHROME_GMAIL_PERSONAL: [TAB_SWITCHING_KEY, 'g'],
  CHROME_GMAIL_WORK: [TAB_SWITCHING_KEY, 'h'],
  CHROME_GITHUB_COANA_PACKAGE_MANAGER: [TAB_SWITCHING_KEY, 'c'],
  CHROME_GITHUB_COANA_PACKAGE_MANAGER_PULLS: [TAB_SWITCHING_KEY, 'p'],
  CHROME_GITHUB_JELLY: [TAB_SWITCHING_KEY, 'j'],
  CHROME_NAVIGATION: [TAB_SWITCHING_KEY, 'n'],

  CHROME_GQUEUES_INBOX: [TAB_SWITCHING_KEY, 'q'],
  ONENOTE: [APP_SWITCHING_KEY, 'o'],
  NOTION: [APP_SWITCHING_KEY, 'n'],
  LINEAR: [APP_SWITCHING_KEY, 'l'],
  FIREFOX: [APP_SWITCHING_KEY, 'g'],
  KEYNOTE: [APP_SWITCHING_KEY, 'k'],
  SLACK: [APP_SWITCHING_KEY, 's'],
  TERMINAL: [APP_SWITCHING_KEY, 't'],
  VSCODE: [APP_SWITCHING_KEY, 'v'],
  KARABINER_ELEMENTS: [APP_SWITCHING_KEY, 'w'],
  KARABINER_EVENT_VIEWER: [APP_SWITCHING_KEY, 'e'],
};

export type OtherStandardShortcuts =
  | 'SWITCH_TO_LAST_APPLICATION'
  | 'GQUEUES'
  | 'GOOGLE_TAB_SEARCH';

export const otherStandardShortcuts: Shortcuts<OtherStandardShortcuts> = {
  SWITCH_TO_LAST_APPLICATION: {
    from: `${APP_SWITCHING_KEY},${APP_SWITCHING_KEY}`,
    to: ['tab', 'left_command'],
  },
  GQUEUES: {
    from: `${APP_SWITCHING_KEY},q`,
    to: (x) =>
      x
        .toApp('Google Chrome')
        .toDelayedAction(toKey('a', ['left_shift', 'left_command']), [])
        .toDelayedAction(toTypeSequence('gqueues'), [])
        .toDelayedAction(toKey('return_or_enter'), []),
  },
  GOOGLE_TAB_SEARCH: {
    from: `${APP_SWITCHING_KEY},r`,
    to: (x) =>
      x
        .toApp('Google Chrome')
        .toDelayedAction(toKey('a', ['left_shift', 'left_command']), []),
    options: { disableVimMode: true },
  },
};
