import { Shortcuts } from '../shortcut-helpers';
import { runKeyboardMaestro } from '../../lib-extensions/utils';

export type OtherCommandsShortcutsKeys =
  | 'NPM_INSTALL_IN_TMP_WITH_PROMPT_FOR_PACKAGE_AND_VERSION'
  | 'NOTIFY_IN_10_MINUTES'
  | 'NOTIFY_IN_30_MINUTES'
  | 'NOTIFY_IN_1_HOUR';

export const otherCommandsShortcuts: Shortcuts<OtherCommandsShortcutsKeys> = {
  NPM_INSTALL_IN_TMP_WITH_PROMPT_FOR_PACKAGE_AND_VERSION: {
    from: '1',
    to: (x) =>
      runKeyboardMaestro(
        x,
        'Install npm package in tmp folder and print library object',
      ),
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  NOTIFY_IN_10_MINUTES: {
    from: '2',
    to: (x) => runKeyboardMaestro(x, 'Notify in 10 minutes'),
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  NOTIFY_IN_30_MINUTES: {
    from: '3',
    to: (x) => runKeyboardMaestro(x, 'Notify in 30 minutes'),
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
  NOTIFY_IN_1_HOUR: {
    from: '4',
    to: (x) => runKeyboardMaestro(x, 'Notify in 1 hour'),
    options: { disableVimMode: true, returnToVimOnEnter: true },
  },
};
