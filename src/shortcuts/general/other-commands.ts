import { Shortcuts } from '../shortcut-helpers';
import { runKeyboardMaestro } from '../../lib-extensions/utils';
import { validateHeaderValue } from 'http';

export type OtherCommandsShortcutsKeys =
  | 'NPM_INSTALL_IN_TMP_WITH_PROMPT_FOR_PACKAGE_AND_VERSION'
  | 'TOGGLE_CONNECTION_TO_WIRELESS_HEADPHONES'
  | 'RAYCAST';

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
  TOGGLE_CONNECTION_TO_WIRELESS_HEADPHONES: {
    from: 'f10',
    to: (x) => runKeyboardMaestro(x, 'Connect wireless headphones'),
  },
  RAYCAST: {
    from: 'spacebar',
    to: ['spacebar', 'left_option'],
    options: { disableVimMode: true },
  },
};
