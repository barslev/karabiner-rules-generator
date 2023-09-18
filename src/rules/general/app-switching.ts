import { ifVimModeEnabled } from './mode-switching';
import { rule, to$ } from 'karabiner.ts';
import {
  appSwitchingShortcuts,
  AppSwitchingShortcutsKeys,
} from '../../shortcuts/general/app-switching';
import { twoClickSequence } from '../../lib-extensions/lib-extensions';

const Apps = {
  INTELLIJ: 'IntelliJ IDEA.app',
  CHROME: 'Google Chrome.app',
  ONENOTE: 'Microsoft OneNote.app',
  NOTION: 'Notion.app',
  LINEAR: 'Linear.app',
  FIREFOX: 'Firefox.app',
  KEYNOTE: 'KeyNote.app',
  SLACK: 'Slack.app',
  TERMINAL: 'Terminal.app',
  VSCODE: 'Visual Studio Code.app',
};

const configsForApps: Record<
  AppSwitchingShortcutsKeys,
  { app: string; args?: string[] }
> = {
  INTELLIJ_KARABINER_RULES_GENERATOR: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/karabiner-rules-generator',
    ],
  },
  INTELLIJ_KARABINER_COMPLEX_RULES: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/karabiner-complex-rules',
    ],
  },
  INTELLIJ_COANA_PACKAGE_MANAGER_1: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager',
    ],
  },
  INTELLIJ_COANA_PACKAGE_MANAGER_2: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager-2',
    ],
  },
  INTELLIJ_COANA_PACKAGE_MANAGER_3: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/coana-package-manager-3',
    ],
  },
  INTELLIJ_JELLY: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/jelly-coana-tech',
    ],
  },
  CHROME: { app: Apps.CHROME },
  ONENOTE: { app: Apps.ONENOTE },
  NOTION: { app: Apps.NOTION },
  LINEAR: { app: Apps.LINEAR },
  FIREFOX: { app: Apps.FIREFOX },
  KEYNOTE: { app: Apps.KEYNOTE },
  SLACK: { app: Apps.SLACK },
  TERMINAL: { app: Apps.TERMINAL },
  VSCODE: { app: Apps.VSCODE },
};
function openApp(appSwitchingKey: AppSwitchingShortcutsKeys) {
  const config = configsForApps[appSwitchingKey];
  return twoClickSequence(
    ...appSwitchingShortcuts[appSwitchingKey],
    to$(
      `open -${appSwitchingKey.startsWith('INTELLI') ? 'n' : ''}a '${
        config.app
      }' ${!config.args ? '' : `--args ${config.args}`}`,
    ),
  );
}

const rules = [
  rule('switch apps', ifVimModeEnabled).manipulators([
    ...(Object.keys(configsForApps) as AppSwitchingShortcutsKeys[]).flatMap(
      (appSwitchingKey) => openApp(appSwitchingKey),
    ),
  ]),
];

export default rules;
