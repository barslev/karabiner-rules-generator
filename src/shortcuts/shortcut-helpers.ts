import { FromKeyCode, ModifierParam, ToKeyParam } from 'karabiner.ts';
import { ManipulatorBuilder } from '../lib-extensions/click-helper';

export type ToKey = [ToKeyParam, ModifierParam | undefined];
export type Options = {
  disableVimMode?: boolean;
  enableVimMode?: boolean;
  returnToVimOnEnter?: boolean;
  optionalModifiers?: ModifierParam;
};
export type ShortcutDescriptor = {
  from: [FromKeyCode, ModifierParam | undefined] | string;
  to: ToKeyParam | ToKey | ((x: ManipulatorBuilder) => ManipulatorBuilder);
  options?: Options;
};
export type Shortcuts<T extends string> = Record<T, ShortcutDescriptor>;
