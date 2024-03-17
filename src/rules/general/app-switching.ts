import {
  appSwitchingShortcuts,
  AppSwitchingShortcutsKeys,
  otherStandardShortcuts,
  tabSwitchingShortcuts,
  TabSwitchingShortcutsKeys,
} from '../../shortcuts/general/app-switching';
import { ClickHelperWrapper } from '../../lib-extensions/click-helper-wrapper';
import { ifVimModeEnabled, setModeToNoModeNoArgs } from '../rules-helpers';
import {
  runKeyboardMaestro,
  wrapInDelayedActionAndSetNoModeInCancel,
} from '../../lib-extensions/utils';
import { to$ } from 'karabiner.ts';

const Apps = {
  INTELLIJ: 'Visual Studio Code - Insiders.app',
  CHROME: 'Google Chrome.app',
  ONENOTE: 'Microsoft OneNote.app',
  NOTION: 'Notion.app',
  LINEAR: 'Linear.app',
  FIREFOX: 'Firefox.app',
  KEYNOTE: 'KeyNote.app',
  KEYBOARD_MAESTRO: 'Keyboard Maestro.app',
  SLACK: 'Slack.app',
  TERMINAL: 'Terminal.app',
  VSCODE: 'Visual Studio Code.app',
  KARABINER_ELEMENTS: 'Karabiner-Elements.app',
  KARABINER_EVENT_VIEWER: 'Karabiner-EventViewer.app',
  TEX_SHOP: 'TeXShop.app',
  TODOIST: 'Todoist.app',
  WARP: 'Warp.app',
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
  INTELLIJ_COANA_JAVA_SUPPORT: {
    app: Apps.INTELLIJ,
    args: ['/Users/benjaminbarslevnielsen/Documents/git/coana-java-support'],
  },
  INTELLIJ_HELM_CHARTS: {
    app: Apps.INTELLIJ,
    args: ['/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/helm-charts'],
  },
  INTELLIJ_JELLY: {
    app: Apps.INTELLIJ,
    args: [
      '/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/jelly-coana-tech',
    ],
  },
  VSCODE_TAI_E: {
    app: Apps.INTELLIJ,
    args: ['/Users/benjaminbarslevnielsen/Documents/git/jsfixinc/tai-e'],
  },
  VSCODE_RESULTS: {
    app: Apps.INTELLIJ,
    args: ['/Users/benjaminbarslevnielsen/Documents/tmp/results'],
  },
  CHROME: { app: Apps.CHROME },
  ONENOTE: { app: Apps.ONENOTE },
  NOTION: { app: Apps.NOTION },
  LINEAR: { app: Apps.LINEAR },
  FIREFOX: { app: Apps.FIREFOX },
  KEYNOTE: { app: Apps.KEYNOTE },
  KEYBOARD_MAESTRO: { app: Apps.KEYBOARD_MAESTRO },
  SLACK: { app: Apps.SLACK },
  //  TERMINAL: { app: Apps.TERMINAL },
  VSCODE: { app: Apps.VSCODE },
  KARABINER_ELEMENTS: { app: Apps.KARABINER_ELEMENTS },
  KARABINER_EVENT_VIEWER: { app: Apps.KARABINER_EVENT_VIEWER },
  TEX_SHOP: { app: Apps.TEX_SHOP },
  TODOIST: { app: Apps.TODOIST },
  WARP: { app: Apps.WARP },
};
export function registerRules(clickHelperWrapper: ClickHelperWrapper) {
  clickHelperWrapper.startRule('App switching commands', [ifVimModeEnabled]);
  (Object.keys(configsForApps) as AppSwitchingShortcutsKeys[]).forEach(
    (appSwitchingKey) => openApp(appSwitchingKey),
  );
  (Object.keys(tabSwitchingShortcuts) as TabSwitchingShortcutsKeys[]).forEach(
    (tabSwitchingKey) => openTab(tabSwitchingKey),
  );
  clickHelperWrapper.registerShortcuts(otherStandardShortcuts);

  function openApp(appSwitchingKey: AppSwitchingShortcutsKeys) {
    const config = configsForApps[appSwitchingKey];
    clickHelperWrapper.registerTwoClickSequence(
      ...appSwitchingShortcuts[appSwitchingKey],
      (x) =>
        wrapInDelayedActionAndSetNoModeInCancel(
          x,
          to$(
            `open -${config.args ? 'n' : ''}a '${config.app}' ${
              !config.args ? '' : `--args ${config.args}`
            }`,
          ),
        ),
    );
  }

  function openTab(tabSwitchingKey: TabSwitchingShortcutsKeys) {
    const shortcutDescriptor = tabSwitchingShortcuts[tabSwitchingKey];
    clickHelperWrapper.registerTwoClickSequence(
      ...shortcutDescriptor.from,
      (x) =>
        runKeyboardMaestro(
          x,
          'Switch to given tab if exists or open new',
          shortcutDescriptor.url,
        ),
    );
  }
}
