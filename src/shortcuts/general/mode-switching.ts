import { toNotificationMessage, toSetVar } from 'karabiner.ts';
import { Shortcuts } from '../shortcut-helpers';
import {
  NO_MODE,
  setModeToVimNotificationToEvent,
  setVimModeWithHalt,
  VIM_MODE,
  VIM_MODE_VARIABLE,
  vimNotificationKey,
  VISUAL_MODE,
} from '../../rules/rules-helpers';

type ModeSwitchingShortcutsFromNoModeKeys =
  'SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE';

type ModeSwitchingShortcutsFromVimModeKeys =
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_START_LINE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_END_LINE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_BELOW'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_COMMA_AT_END_LINE_AND_NEW_LINE_BELOW'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_ABOVE'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET'
  | 'SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET_LINE'
  | 'SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE';

type ModeSwitchingShortcutsFromVisualModeKeys =
  'SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE';

export const ModeSwitchingFromNoModeShortcuts: Shortcuts<ModeSwitchingShortcutsFromNoModeKeys> =
  {
    SWITCH_FROM_NORMAL_MODE_TO_VIM_MODE: {
      from: 'caps_lock',
      to: (x) =>
        x
          .toIfAlone(setVimModeWithHalt)
          .toIfHeldDown(toSetVar(VIM_MODE_VARIABLE, VIM_MODE))
          .to(setModeToVimNotificationToEvent)
          .toAfterKeyUp(toSetVar(VIM_MODE_VARIABLE, NO_MODE))
          .toAfterKeyUp(toNotificationMessage(vimNotificationKey, ''))
          .parameters({
            'basic.to_if_held_down_threshold_milliseconds': 50,
          }),
    },
  };

export const ModeSwitchingFromVimModeShortcuts: Shortcuts<ModeSwitchingShortcutsFromVimModeKeys> =
  {
    SWITCH_FROM_VIM_TO_NORMAL_MODE: {
      from: 'i',
      to: (x) => x,
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_START_LINE: {
      from: ['i', 'left_shift'],
      to: ['left_arrow', ['left_command']],
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_END_LINE: {
      from: ['a', 'left_shift'],
      to: ['right_arrow', ['left_command']],
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_BELOW: {
      from: 'o',
      to: (x) => x.to('right_arrow', ['left_command']).to('return_or_enter'),
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_COMMA_AT_END_LINE_AND_NEW_LINE_BELOW: {
      from: ['o', 'left_option'],
      to: (x) =>
        x.to('right_arrow', ['left_command']).to('comma').to('return_or_enter'),
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_AT_NEW_LINE_ABOVE: {
      from: ['o', 'left_shift'],
      to: (x) =>
        x
          .to('left_arrow', ['left_command'])
          .to('return_or_enter')
          .to('up_arrow'),
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET: {
      from: ['i', 'left_option'],
      to: (x) =>
        x
          .to('left_arrow', ['left_option'])
          .to('right_arrow', ['left_option', 'left_shift']),
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_TO_NORMAL_MODE_WITH_TARGET_LINE: {
      from: ['i', 'right_option'],
      to: (x) =>
        x
          .to('left_arrow', ['left_command'])
          .to('right_arrow', ['left_command', 'left_shift']),
      options: {
        disableVimMode: true,
      },
    },
    SWITCH_FROM_VIM_MODE_TO_VISUAL_MODE: {
      from: 'v',
      to: (x) =>
        x
          .to(toSetVar(VIM_MODE_VARIABLE, VISUAL_MODE))
          .toNotificationMessage(vimNotificationKey, 'Visual mode'),
    },
  };

export const ModeSwitchingFromVisualModeShortcuts: Shortcuts<ModeSwitchingShortcutsFromVisualModeKeys> =
  {
    SWITCH_FROM_VISUAL_MODE_TO_VIM_MODE: {
      from: 'v',
      to: (x) => x,
      options: {
        enableVimMode: true,
      },
    },
  };
