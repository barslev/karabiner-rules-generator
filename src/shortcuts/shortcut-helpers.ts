import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';

export type ShortcutDescriptor = {
  from:
    | [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined]
    | string;
  to: [ToKeyParam, ModifierParam | undefined];
  options?: {
    disableVimMode: boolean;
    returnToVimOnEnter: boolean;
  };
};
export type Shortcuts<T extends string> = Record<T, ShortcutDescriptor>;
