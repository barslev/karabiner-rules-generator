import { ToEvent, map, to$ } from 'karabiner.ts';
import { setModeToNoModeNoArgs } from '../rules/rules-helpers';

export function transformDanishStringToKarabinerCompatibleString(str: string) {
  return str
    .replaceAll('(', '*')
    .replaceAll(')', '(')
    .replaceAll("'", '\\')
    .replaceAll('"', '@')
    .replaceAll('/', '&')
    .replaceAll('-', '/');
}

export function runKeyboardMaestro(
  x: ReturnType<typeof map>,
  macroName: string,
  parameter?: string,
) {
  return wrapInDelayedActionAndSetNoModeInCancel(
    x,
    to$(
      `osascript -e 'tell application "Keyboard Maestro Engine" to do script "${macroName}"${
        parameter ? ` with parameter "${parameter}"` : ''
      }'`,
    ),
  );
}

/**
 * Use toDelayedAction to not execute script when clicking writing com and the shortcut for activing the script is c,o
 * @param toAction
 */
export function wrapInDelayedActionAndSetNoModeInCancel(
  x: ReturnType<typeof map>,
  toAction: ToEvent | ToEvent[],
) {
  return x.toDelayedAction(toAction, setModeToNoModeNoArgs()).parameters({
    'basic.to_delayed_action_delay_milliseconds': 300,
  });
}
