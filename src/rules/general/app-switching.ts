import {
  appSwitchingShortcuts,
  AppSwitchingShortcutsKeys,
  otherStandardShortcuts,
} from '../../shortcuts/general/app-switching';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifVimModeEnabled } from '../rules-helpers';

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
  KARABINER_ELEMENTS: 'Karabiner-Elements.app',
  KARABINER_EVENT_VIEWER: 'Karabiner-EventViewer.app',
  TEX_SHOP: 'TeXShop.app',
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
  CHROME_RECIPES: {
    app: Apps.CHROME,
    args: ['https://coda.io/d/Madplan_d5UhBaAzvau/Opskrifter_suW-U#_lu_Pq'],
  },
  CHROME_ADD_TO_SHOPPING_LIST: {
    app: Apps.CHROME,
    args: [
      'https://coda.io/d/Madplan_d5UhBaAzvau/Tilf-j-til-indk-bsliste_suzMA#_luAoi',
    ],
  },
  CHROME_SHOPPING_LIST: {
    app: Apps.CHROME,
    args: ['https://coda.io/d/Madplan_d5UhBaAzvau/Indk-bsliste_sumoG#_luEV5'],
  },
  CHROME_GMAIL_PERSONAL: {
    app: Apps.CHROME,
    args: ['https://mail.google.com/mail/u/0/#inbox'],
  },
  CHROME_GMAIL_WORK: {
    app: Apps.CHROME,
    args: ['https://mail.google.com/mail/u/1/#inbox'],
  },
  CHROME_GITHUB_COANA_PACKAGE_MANAGER: {
    app: Apps.CHROME,
    args: ['https://github.com/coana-tech/coana-package-manager'],
  },
  CHROME_GITHUB_COANA_PACKAGE_MANAGER_PULLS: {
    app: Apps.CHROME,
    args: ['https://github.com/coana-tech/coana-package-manager/pulls'],
  },
  CHROME_GITHUB_JELLY: {
    app: Apps.CHROME,
    args: ['https://github.com/coana-tech/jelly'],
  },
  CHROME_NAVIGATION: {
    app: Apps.CHROME,
    args: ['https://www.google.dk/maps/dir/Musv%C3%A5gevej+18,+Aarhus'],
  },
  CHROME_GQUEUES_INBOX: {
    app: Apps.CHROME,
    args: ['https://app.gqueues.com/main/inbox'],
  },
  ONENOTE: { app: Apps.ONENOTE },
  NOTION: { app: Apps.NOTION },
  LINEAR: { app: Apps.LINEAR },
  FIREFOX: { app: Apps.FIREFOX },
  KEYNOTE: { app: Apps.KEYNOTE },
  SLACK: { app: Apps.SLACK },
  TERMINAL: { app: Apps.TERMINAL },
  VSCODE: { app: Apps.VSCODE },
  KARABINER_ELEMENTS: { app: Apps.KARABINER_ELEMENTS },
  KARABINER_EVENT_VIEWER: { app: Apps.KARABINER_EVENT_VIEWER },
  TEX_SHOP: { app: Apps.TEX_SHOP },
};
export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('App switching commands', [ifVimModeEnabled]);
  (Object.keys(configsForApps) as AppSwitchingShortcutsKeys[]).forEach(
    (appSwitchingKey) => openApp(appSwitchingKey),
  );
  clickHelperWrapper.registerShortcuts(otherStandardShortcuts);

  function openApp(appSwitchingKey: AppSwitchingShortcutsKeys) {
    const config = configsForApps[appSwitchingKey];
    clickHelperWrapper.registerTwoClickSequence(
      ...appSwitchingShortcuts[appSwitchingKey],
      (x) =>
        x.to$(
          `open -${config.args ? 'n' : ''}a '${config.app}' ${
            !config.args ? '' : `--args ${config.args}`
          }`,
        ),
    );
  }
}
