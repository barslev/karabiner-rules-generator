import { FromKeyParam } from 'karabiner.ts';

const APP_SWITCHING_KEY = 'd';

export type AppSwitchingShortcutsKeys =
  | 'INTELLIJ_KARABINER_RULES_GENERATOR'
  | 'INTELLIJ_KARABINER_COMPLEX_RULES'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_1'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_2'
  | 'INTELLIJ_COANA_PACKAGE_MANAGER_3'
  | 'INTELLIJ_JELLY'
  | 'CHROME'
  | 'ONENOTE'
  | 'NOTION'
  | 'LINEAR'
  | 'FIREFOX'
  | 'KEYNOTE'
  | 'SLACK'
  | 'TERMINAL'
  | 'VSCODE';

// TODO: The following 4 is not implemented yet
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'f', { shell_command: "open /Users/benjaminbarslevnielsen/Documents/git/jsfixinc"}, vimModeOptions, undefined, getToKeyPress(['w', 'left_command'])),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'x', { shell_command: "open -a 'Google Chrome.app'"}, vimModeOptions, [getToKeyPress(chromeShortcuts.NEW_WINDOW), getToKeyPress(['v', 'left_command']), getToKeyPress(['return_or_enter'])]),
// addSecondClick2(APPLICATION_SWITCHER_KEY, 'm', [getToKeyPress(['c', 'left_command']), { shell_command: "open -na 'IntelliJ IDEA.app' --args /Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager-2"}], vimModeOptions, undefined, [getToKeyPress(['f', 'left_command']), getToKeyPress(['v', 'left_command'])]),
// addSecondClick2(APPLICATION_SWITCHER_KEY, APPLICATION_SWITCHER_KEY, getToKeyPress(["tab", "left_command"]), vimModeOptions),
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
  ONENOTE: [APP_SWITCHING_KEY, 'o'],
  NOTION: [APP_SWITCHING_KEY, 'n'],
  LINEAR: [APP_SWITCHING_KEY, 'l'],
  FIREFOX: [APP_SWITCHING_KEY, 'g'],
  KEYNOTE: [APP_SWITCHING_KEY, 'k'],
  SLACK: [APP_SWITCHING_KEY, 's'],
  TERMINAL: [APP_SWITCHING_KEY, 't'],
  VSCODE: [APP_SWITCHING_KEY, 'v'],
};
