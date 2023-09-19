import { ifVimModeEnabled } from './mode-switching';
import { map, rule } from 'karabiner.ts';
import {
  secondKeyPressedWhileFirstHeldDown,
  twoClickSequence,
} from '../../lib-extensions/lib-extensions';

const rules = [
  rule('deletion rules', ifVimModeEnabled).manipulators([
    ...secondKeyPressedWhileFirstHeldDown('d', 'f', (x) => {
      return x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']);
    }),
    ...secondKeyPressedWhileFirstHeldDown('d', 's', (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
    ),
    ...secondKeyPressedWhileFirstHeldDown('d', 'a', (x) => {
      return x
        .to('left_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']);
    }),
    ...secondKeyPressedWhileFirstHeldDown('d', 'g', (x) => {
      return x
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']);
    }),
  ]),
  rule('copying rules', ifVimModeEnabled).manipulators([
    ...twoClickSequence('y', 'l', (x) =>
      x
        .to('left_arrow', ['left_command'])
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('c', ['left_command']),
    ),
    ...twoClickSequence('y', 'f', (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('c', ['left_command']),
    ),
    ...twoClickSequence('y', 's', (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('c', ['left_command']),
    ),
    ...twoClickSequence('y', 'g', (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_command'])
        .to('c', ['left_command']),
    ),
    ...twoClickSequence('y', 'a', (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_command'])
        .to('c', ['left_command']),
    ),
  ]),
  rule('cutting rules', ifVimModeEnabled).manipulators([
    ...twoClickSequence('c', 'l', (x) =>
      x
        .to('left_arrow', ['left_command'])
        .to('right_arrow', ['left_command', 'left_shift'])
        .to('x', ['left_command']),
    ),
    ...twoClickSequence('c', 'f', (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
    ),
    ...twoClickSequence('c', 's', (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_option'])
        .to('x', ['left_command']),
    ),
    ...twoClickSequence('c', 'g', (x) =>
      x
        .to('right_arrow', ['left_shift', 'left_command'])
        .to('x', ['left_command']),
    ),
    ...twoClickSequence('c', 'a', (x) =>
      x
        .to('left_arrow', ['left_shift', 'left_command'])
        .to('x', ['left_command']),
    ),
  ]),
  rule('pasting and undoing/redoing', ifVimModeEnabled).manipulators([
    map('h').to('delete_forward'),
    map('h', ['left_command']).to('delete_or_backspace'),
    map('p').to('v', ['left_command']),
    map('u').to('z', ['left_command']),
    map('u', ['left_command']).to('z', ['left_shift', 'left_command']),
  ]),
  rule('navigation rules', ifVimModeEnabled).manipulators([
    map('j', undefined, ['control', 'option', 'command', 'shift']).to(
      'left_arrow',
    ),
    map('k', undefined, ['control', 'option', 'command', 'shift']).to(
      'down_arrow',
    ),
    map('l', undefined, ['control', 'option', 'command', 'shift']).to(
      'up_arrow',
    ),
    map('semicolon', undefined, ['control', 'option', 'command', 'shift']).to(
      'right_arrow',
    ),
    map('f').to('right_arrow', ['left_option']),
    map('s').to('left_arrow', ['left_option']),
    map('s', ['left_option']).to('left_arrow', ['left_command']),
    map('f', ['left_option']).to('right_arrow', ['left_command']),
    map('s', ['right_option']).to('left_arrow', ['fn', 'left_command']),
    map('f', ['right_option']).to('right_arrow', ['fn', 'left_command']),
  ]),
];

export default rules;
