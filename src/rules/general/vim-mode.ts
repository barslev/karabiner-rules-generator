import { ifVimModeEnabled } from './mode-switching';
import { FromAndToKeyCode, rule } from 'karabiner.ts';
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
clickHelper.setupBasic('h', 'delete_forward');
clickHelper.setupBasic(['h', 'left_command', undefined], 'delete_or_backspace');
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
clickHelper.setupBasic('c', ['c', ['left_command']]);
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

// pasting and undoing/redoing
clickHelper.setupBasic('p', ['v', ['left_command']]);
clickHelper.setupBasic('u', ['z', ['left_command']]);
clickHelper.setupBasic(
  ['u', 'left_command', undefined],
  ['z', ['left_shift', 'left_command']],
);

// navigation rules
clickHelper.setupBasic(
  ['j', undefined, ['control', 'option', 'command', 'shift']],
  'left_arrow',
);
clickHelper.setupBasic(
  ['k', undefined, ['control', 'option', 'command', 'shift']],
  'down_arrow',
);
clickHelper.setupBasic(
  ['l', undefined, ['control', 'option', 'command', 'shift']],
  'up_arrow',
);
clickHelper.setupBasic(
  ['semicolon', undefined, ['control', 'option', 'command', 'shift']],
  'right_arrow',
);
clickHelper.setupBasic('f', ['right_arrow', ['left_option']]);
clickHelper.setupBasic('s', ['left_arrow', ['left_option']]);
clickHelper.setupBasic(
  ['f', 'left_option', undefined],
  ['right_arrow', ['left_command']],
);
clickHelper.setupBasic(
  ['s', 'left_option', undefined],
  ['left_arrow', ['left_command']],
);
clickHelper.setupBasic(
  ['s', 'right_option', undefined],
  ['left_arrow', ['fn', 'left_command']],
);
clickHelper.setupBasic(
  ['f', 'right_option', undefined],
  ['right_arrow', ['fn', 'left_command']],
);

// normal command key combinations
(['v', 'z'] as FromAndToKeyCode[]).forEach((key) =>
  clickHelper.setupBasic(
    [key, 'left_command', undefined],
    [key, 'left_command'],
  ),
);
(['f', 'i', 'r'] as FromAndToKeyCode[]).forEach((key) =>
  clickHelper.setupBasic(
    [key, 'left_command', undefined],
    [key, 'left_command'],
    { disableVimMode: true },
  ),
);
clickHelper.setupBasic('grave_accent_and_tilde', 'escape');

clickHelper.setupBasic('slash', 'return_or_enter');
const rules = [
  rule('All other rules', ifVimModeEnabled).manipulators(
    clickHelper.getManipulators(),
  ),
];

export default rules;
