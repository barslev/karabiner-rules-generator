import { map } from 'karabiner.ts';

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
  return x.to$(
    `osascript -e 'tell application "Keyboard Maestro Engine" to do script "${macroName}"${
      parameter ? ` with parameter "${parameter}"` : ''
    }'`,
  );
}
