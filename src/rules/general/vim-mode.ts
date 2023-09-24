import { ifVimModeEnabled, setModeToNoMode } from './mode-switching';
import { FromAndToKeyCode, map, rule } from 'karabiner.ts';
import { ClickHelper } from '../../lib-extensions/click-helper';

const clickHelper = new ClickHelper();
// Deletion rules
clickHelper.registerSecondKeyPressedWhileFirstHeldDown('d', 's', (x) =>
  x.to('left_arrow', ['left_shift', 'left_option']).to('x', ['left_command']),
);
clickHelper.registerSecondKeyPressedWhileFirstHeldDown('d', 's', (x) =>
  x.to('left_arrow', ['left_shift', 'left_option']).to('x', ['left_command']),
);
clickHelper.registerSecondKeyPressedWhileFirstHeldDown('d', 'f', (x) => {
  return x
    .to('right_arrow', ['left_shift', 'left_option'])
    .to('x', ['left_command']);
});
clickHelper.registerSecondKeyPressedWhileFirstHeldDown('d', 'a', (x) => {
  return x
    .to('left_arrow', ['left_command', 'left_shift'])
    .to('x', ['left_command']);
});
clickHelper.registerSecondKeyPressedWhileFirstHeldDown('d', 'g', (x) => {
  return x
    .to('right_arrow', ['left_command', 'left_shift'])
    .to('x', ['left_command']);
});

// Copying rules
clickHelper.registerTwoClickSequence('y', 'y', (x) =>
  x
    .to('left_arrow', ['left_command'])
    .to('right_arrow', ['left_command', 'left_shift'])
    .to('c', ['left_command']),
);
clickHelper.registerTwoClickSequence('y', 'f', (x) =>
  x.to('right_arrow', ['left_shift', 'left_option']).to('c', ['left_command']),
);
clickHelper.registerTwoClickSequence('y', 's', (x) =>
  x.to('left_arrow', ['left_shift', 'left_option']).to('c', ['left_command']),
);
clickHelper.registerTwoClickSequence('y', 'g', (x) =>
  x.to('right_arrow', ['left_shift', 'left_command']).to('c', ['left_command']),
);
clickHelper.registerTwoClickSequence('y', 'a', (x) =>
  x.to('left_arrow', ['left_shift', 'left_command']).to('c', ['left_command']),
);

// Cutting rules:
clickHelper.registerTwoClickSequence('c', 'l', (x) =>
  x
    .to('left_arrow', ['left_command'])
    .to('right_arrow', ['left_command', 'left_shift'])
    .to('x', ['left_command']),
);
clickHelper.registerTwoClickSequence('c', 'f', (x) =>
  x.to('right_arrow', ['left_shift', 'left_option']).to('x', ['left_command']),
);
clickHelper.registerTwoClickSequence('c', 's', (x) =>
  x.to('left_arrow', ['left_shift', 'left_option']).to('x', ['left_command']),
);
clickHelper.registerTwoClickSequence('c', 'g', (x) =>
  x.to('right_arrow', ['left_shift', 'left_command']).to('x', ['left_command']),
);
clickHelper.registerTwoClickSequence('c', 'a', (x) =>
  x.to('left_arrow', ['left_shift', 'left_command']).to('x', ['left_command']),
);
const rules = [
  rule('deletion rules', ifVimModeEnabled).manipulators([
    map('h').to('delete_forward'),
    map('h', ['left_command']).to('delete_or_backspace'),
  ]),
  rule('copying rules', ifVimModeEnabled).manipulators([
    map('c').to('c', ['left_command']),
  ]),
  rule('pasting and undoing/redoing', ifVimModeEnabled).manipulators([
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
  rule('normal command key combinations', ifVimModeEnabled).manipulators([
    ...(['v', 'z'] as FromAndToKeyCode[]).map((key) =>
      map(key, 'left_command').to(key, 'left_command'),
    ),
    ...(['f', 'i', 'r'] as FromAndToKeyCode[]).map((key) =>
      setModeToNoMode(map(key, 'left_command').to(key, 'left_command')),
    ),
    map('grave_accent_and_tilde').to('escape'),
    map('slash').to('return_or_enter'),
  ]),
  rule('All other rules', ifVimModeEnabled).manipulators(
    clickHelper.getManipulators(),
  ),
];

export default rules;
