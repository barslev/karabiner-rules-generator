import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';
import { ManipulatorBuilder } from '../lib-extensions/click-helper';

export type ToKey = [ToKeyParam, ModifierParam | undefined];
export type ShortcutDescriptor = {
  from:
    | [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined]
    | string;
  to: ToKey | ((x: ManipulatorBuilder) => ManipulatorBuilder);
  options?: {
    disableVimMode: boolean;
    returnToVimOnEnter: boolean;
  };
};
export type Shortcuts<T extends string> = Record<T, ShortcutDescriptor>;
