import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';

type IntelliJShortcutsKeys = 'BACK' | 'TO';
type IntelliJShortcutsType = Record<
  IntelliJShortcutsKeys,
  {
    from: [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined];
    to: [ToKeyParam, ModifierParam | undefined];
  }
>;
export const intelliJShortcuts: IntelliJShortcutsType = {
  BACK: {
    from: ['n', undefined, undefined],
    to: ['left_arrow', { left: '⌘⌥' }],
  },
  TO: {
    from: ['m', undefined, undefined],
    to: ['right_arrow', { left: '⌘⌥' }],
  },
};
