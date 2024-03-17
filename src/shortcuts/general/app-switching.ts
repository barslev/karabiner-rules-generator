import { FromKeyParam, to$, toKey, toTypeSequence } from 'karabiner.ts';
import { Options, Shortcuts } from '../shortcut-helpers';
import { runKeyboardMaestro } from '../../lib-extensions/utils';

const APP_SWITCHING_KEY = 'd';
const TAB_SWITCHING_KEY = 'c';

export type AppSwitchingShortcutsKeys =
  | 'INTELLIJ_KARABINER_RULES_GENERATOR'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_1'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_2'
  | 'INTELLIJ_COANA_JAVA_SUPPORT'
  | 'INTELLIJ_HELM_CHARTS'
  | 'INTELLIJ_JELLY'
  | 'VSCODE_TAI_E'
  | 'VSCODE_RESULTS'
  | 'CHROME'
  | 'ONENOTE'
  | 'NOTION'
  | 'LINEAR'
  | 'FIREFOX'
  | 'KEYNOTE'
  | 'KEYBOARD_MAESTRO'
  | 'SLACK'
  // | 'TERMINAL'
  | 'VSCODE'
  | 'KARABINER_ELEMENTS'
  | 'KARABINER_EVENT_VIEWER'
  | 'TEX_SHOP'
  | 'TODOIST'
  | 'WARP';

// TODO: The following 4 is not implemented yet
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'f', { shell_command: "open /Users/benjaminbarslevnielsen/Documents/git/jsfixinc"}, vimModeOptions, undefined, getToKeyPress(['w', 'left_command'])),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'x', { shell_command: "open -a 'Google Chrome.app'"}, vimModeOptions, [getToKeyPress(chromeShortcuts.NEW_WINDOW), getToKeyPress(['v', 'left_command']), getToKeyPress(['return_or_enter'])]),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'm', [getToKeyPress(['c', 'left_command']), { shell_command: "open -na 'IntelliJ IDEA.app' --args /Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager-2"}], vimModeOptions, undefined, [getToKeyPress(['f', 'left_command']), getToKeyPress(['v', 'left_command'])]),

export const appSwitchingShortcuts: Record<
  AppSwitchingShortcutsKeys,
  [FromKeyParam, FromKeyParam]
> = {
  INTELLIJ_KARABINER_RULES_GENERATOR: [APP_SWITCHING_KEY, 'y'],
  INTELLIJ_COANA_PACKAGE_MANAGER_1: [APP_SWITCHING_KEY, 'i'],
  INTELLIJ_COANA_PACKAGE_MANAGER_2: [APP_SWITCHING_KEY, 'semicolon'],
  INTELLIJ_COANA_JAVA_SUPPORT: [APP_SWITCHING_KEY, 'quote'],
  INTELLIJ_HELM_CHARTS: [APP_SWITCHING_KEY, 'h'],
  INTELLIJ_JELLY: [APP_SWITCHING_KEY, 'j'],
  VSCODE_RESULTS: [APP_SWITCHING_KEY, 'open_bracket'],
  VSCODE_TAI_E: [APP_SWITCHING_KEY, 'close_bracket'],
  CHROME: [APP_SWITCHING_KEY, 'c'],
  ONENOTE: [APP_SWITCHING_KEY, 'o'],
  NOTION: [APP_SWITCHING_KEY, 'n'],
  LINEAR: [APP_SWITCHING_KEY, 'l'],
  FIREFOX: [APP_SWITCHING_KEY, 'g'],
  KEYNOTE: [APP_SWITCHING_KEY, 'k'],
  KEYBOARD_MAESTRO: [APP_SWITCHING_KEY, 'm'],
  SLACK: [APP_SWITCHING_KEY, 's'],
  // TERMINAL: [APP_SWITCHING_KEY, 't'],
  VSCODE: [APP_SWITCHING_KEY, 'v'],
  KARABINER_ELEMENTS: [APP_SWITCHING_KEY, 'w'],
  KARABINER_EVENT_VIEWER: [APP_SWITCHING_KEY, 'e'],
  TEX_SHOP: [APP_SWITCHING_KEY, 'x'],
  TODOIST: [APP_SWITCHING_KEY, 'u'],
  WARP: [APP_SWITCHING_KEY, 't'],
};

export type TabSwitchingShortcutsKeys =
  | 'CHROME_RECIPES'
  | 'CHROME_ADD_TO_SHOPPING_LIST'
  | 'CHROME_SHOPPING_LIST'
  | 'CHROME_CALENDAR'
  | 'CHROME_GMAIL_PERSONAL'
  | 'CHROME_GMAIL_WORK'
  | 'CHROME_GITHUB_COANA_PACKAGE_MANAGER'
  | 'CHROME_GITHUB_COANA_PACKAGE_MANAGER_PULLS'
  | 'CHROME_GITHUB_JELLY'
  | 'CHROME_NAVIGATION'
  | 'CHROME_GQUEUES_INBOX'
  | 'CHROME_ARGO'
  | 'CHROME_TRELLO'
  | 'CHROME_YOUTUBE'
  | 'CHROME_DASHBOARD';

export const tabSwitchingShortcuts: Record<
  TabSwitchingShortcutsKeys,
  {
    from: [FromKeyParam, FromKeyParam];
    url: string;
    options?: Partial<Options>;
  }
> = {
  CHROME_RECIPES: {
    from: [TAB_SWITCHING_KEY, 'o'],
    url: 'https://coda.io/d/Madplan_d5UhBaAzvau/Opskrifter_suW-U#_lu_Pq',
  },
  CHROME_ADD_TO_SHOPPING_LIST: {
    from: [TAB_SWITCHING_KEY, 't'],
    url: 'https://coda.io/d/Madplan_d5UhBaAzvau/Tilf-j-til-indk-bsliste_suzMA#_luAoi',
  },
  CHROME_SHOPPING_LIST: {
    from: [TAB_SWITCHING_KEY, 'i'],
    url: 'https://coda.io/d/Madplan_d5UhBaAzvau/Indk-bsliste_sumoG#_luEV5',
  },
  CHROME_GMAIL_PERSONAL: {
    from: [TAB_SWITCHING_KEY, 'g'],
    url: 'https://mail.google.com/mail/u/0/#inbox',
  },
  CHROME_GMAIL_WORK: {
    from: [TAB_SWITCHING_KEY, 'h'],
    url: 'https://mail.google.com/mail/u/1/#inbox',
  },
  CHROME_CALENDAR: {
    from: [TAB_SWITCHING_KEY, 'l'],
    url: 'https://calendar.google.com/calendar/u/1',
  },
  CHROME_GITHUB_COANA_PACKAGE_MANAGER: {
    from: [TAB_SWITCHING_KEY, 'c'],
    url: 'https://github.com/coana-tech/coana-package-manager',
  },
  CHROME_GITHUB_COANA_PACKAGE_MANAGER_PULLS: {
    from: [TAB_SWITCHING_KEY, 'p'],
    url: 'https://github.com/coana-tech/coana-package-manager/pulls',
  },
  CHROME_GITHUB_JELLY: {
    from: [TAB_SWITCHING_KEY, 'j'],
    url: 'https://github.com/coana-tech/jelly',
  },
  CHROME_NAVIGATION: {
    from: [TAB_SWITCHING_KEY, 'n'],
    url: 'https://www.google.dk/maps/dir/Musv%C3%A5gevej+18,+Aarhus',
  },
  CHROME_GQUEUES_INBOX: {
    from: [TAB_SWITCHING_KEY, 'q'],
    url: 'https://app.gqueues.com/main/inbox',
  },
  CHROME_ARGO: {
    from: [TAB_SWITCHING_KEY, 'a'],
    url: 'https://argocd.coana.tech',
  },
  CHROME_TRELLO: {
    from: [TAB_SWITCHING_KEY, 'r'],
    url: 'https://trello.com/b/nR3yPO4q/tasks',
  },
  CHROME_YOUTUBE: {
    from: [TAB_SWITCHING_KEY, 'y'],
    url: 'https://youtube.com',
  },
  CHROME_DASHBOARD: {
    from: [TAB_SWITCHING_KEY, 'd'],
    url: 'http://localhost:3000',
  },
};

export type OtherStandardShortcuts =
  | 'SWITCH_TO_LAST_APPLICATION'
  | 'GQUEUES'
  | 'GOOGLE_TAB_SEARCH'
  | 'SEARCH_IN_INTELLI_J'
  | 'CHROME_NEW_TAB_WITH_SELECTED_URL'
  | 'CHROME_GITHUB_REPO_FROM_MAVEN_PACKAGE_IN_CLIPBOARD';
// | 'SWITCH_TO_WARP_WORKFLOW_SEARCH';

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
  SEARCH_IN_INTELLI_J: {
    from: `${APP_SWITCHING_KEY},p`,
    to: (x) =>
      x
        .to(toKey('c', ['left_command']))
        .to$(
          "open -na 'IntelliJ IDEA.app' --args /Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager",
        )
        .toDelayedAction(toKey('f', ['left_command']), [])
        .toDelayedAction(toKey('v', ['left_command']), [])
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 500 }),
  },
  CHROME_NEW_TAB_WITH_SELECTED_URL: {
    from: `${TAB_SWITCHING_KEY},x`,
    to: (x) =>
      x
        .to(toKey('c', ['left_command']))
        .toApp('Google Chrome')
        .toDelayedAction(toKey('t', ['left_command']), [])
        .toDelayedAction(toKey('v', ['left_command']), [])
        .toDelayedAction(toKey('return_or_enter'), []),
  },
  CHROME_GITHUB_REPO_FROM_MAVEN_PACKAGE_IN_CLIPBOARD: {
    from: `${TAB_SWITCHING_KEY},m`,
    to: (x) =>
      runKeyboardMaestro(x, 'Prepare writing vulnerability for selected URL'),
    // runKeyboardMaestro(
    //   x.to(toKey('c', ['left_command'])),
    //   'Open github repo from maven package name',
    // ),
  },
  // SWITCH_TO_WARP_WORKFLOW_SEARCH: {
  //   from: `${APP_SWITCHING_KEY},t`,
  //   to: (x) => runKeyboardMaestro(x, 'Open Warp and search coana workflow'),
  //   options: { disableVimMode: true },
  // }
};
