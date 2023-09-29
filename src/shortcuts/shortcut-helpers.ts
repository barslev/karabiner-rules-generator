import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';
import { ManipulatorBuilder } from '../lib-extensions/click-helper';

export type ToKey = [ToKeyParam, ModifierParam | undefined];
export type Options = {
  disableVimMode?: boolean;
  enableVimMode?: boolean;
  returnToVimOnEnter?: boolean;
};
export type ShortcutDescriptor = {
  from:
    | [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined]
    | string;
  to: ToKey | ((x: ManipulatorBuilder) => ManipulatorBuilder);
  options?: Options;
};
export type Shortcuts<T extends string> = Record<T, ShortcutDescriptor>;
