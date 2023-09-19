import { map, rule } from 'karabiner.ts';
import { ifVisualModeEnabled, setModeToVim } from './mode-switching';

const rules = [
  rule('visual mode', ifVisualModeEnabled).manipulators([
    map('j').to('left_arrow', ['left_shift']),
    map('k').to('down_arrow', ['left_shift']),
    map('l').to('up_arrow', ['left_shift']),
    map('semicolon').to('right_arrow', ['left_shift']),
    map('f').to('right_arrow', ['left_shift', 'left_option']),
    map('s').to('left_arrow', ['left_shift', 'left_option']),
    map('f', 'left_option').to('right_arrow', ['left_shift', 'left_command']),
    map('s', 'left_option').to('left_arrow', ['left_shift', 'left_command']),
    setModeToVim(map('d').to('x', ['left_command'])),
    setModeToVim(map('y').to('c', ['left_command'])),
    setModeToVim(map('c').to('x', ['left_command'])),
    setModeToVim(map('x').to('delete_or_backspace', ['left_command'])),
  ]),
];

export default rules;
