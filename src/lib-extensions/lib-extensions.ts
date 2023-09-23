import { FromKeyParam, ifVar, map, toSetVar } from 'karabiner.ts';
import { setModeToVim } from '../rules/general/mode-switching';

const setupForClickSequences: FromKeyParam[] = [];

function setupFirstClick(from1: FromKeyParam) {
  if (!setupForClickSequences.includes(from1)) {
    setupForClickSequences.push(from1);
    return [
      map(from1)
        .to(toSetVar(`${from1}_pressed`, 1))
        .to(toSetVar(`${from1}_held_down`, 1))
        .toAfterKeyUp(toSetVar(`${from1}_held_down`, 0))
        .toDelayedAction(toSetVar(`${from1}_pressed`, 0), [])
        .parameters({
          'basic.to_delayed_action_delay_milliseconds': 300,
        }),
    ];
  } else {
    return [];
  }
}

/**
 * Perform toEvent when first from1 is pressed and then from2, i.e., not when from1 is held down.
 */
export function twoClickSequence(
  from1: FromKeyParam,
  from2: FromKeyParam,
  applyTo: (builder: ReturnType<typeof map>) => ReturnType<typeof map>,
) {
  const manipulators = setupFirstClick(from1);
  manipulators.push(
    applyTo(
      map(from2)
        .toVar(`${from1}_pressed`, 0)
        .condition(ifVar(`${from1}_pressed`, 1))
        .condition(ifVar(`${from1}_held_down`, 0)),
    ),
  );
  return manipulators;
}

export function secondKeyPressedWhileFirstHeldDown(
  from1: FromKeyParam,
  from2: FromKeyParam,
  applyTo: (builder: ReturnType<typeof map>) => ReturnType<typeof map>,
) {
  const manipulators = setupFirstClick(from1);
  manipulators.push(
    applyTo(
      map(from2)
        .condition(ifVar(`${from1}_pressed`, 1))
        .condition(ifVar(`${from1}_held_down`, 1)),
    ),
  );
  return manipulators;
}
export function setupReturnToEnterVimMode() {
  return setModeToVim(
    map('return_or_enter')
      .to('return_or_enter')
      .toVar('return_to_vim_on_enter', 0)
      .condition(ifVar('return_to_vim_on_enter', 1)),
  );
}
