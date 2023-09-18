import { FromKeyParam, ifVar, map, ToEvent, toSetVar } from 'karabiner.ts';

const setupForClickSequences: FromKeyParam[] = [];

/**
 * Perform toEvent when first from1 is pressed and then from2, i.e., not when from1 is held down.
 */
export function twoClickSequence(
  from1: FromKeyParam,
  from2: FromKeyParam,
  toEvent: ToEvent,
) {
  const manipulators = []; // should be BasicManipulatorBuilder[]
  if (!setupForClickSequences.includes(from1)) {
    setupForClickSequences.push(from1);
    manipulators.push(
      map(from1)
        .toAfterKeyUp(toSetVar(`${from1}_pressed`, 1))
        .toDelayedAction(toSetVar(`${from1}_pressed`, 0), [])
        .condition(ifVar(`${from1}_pressed`, 1).unless())
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 1000 }),
    );
  }
  manipulators.push(
    map(from2)
      .toVar(`${from1}_pressed`, 0)
      .condition(ifVar(`${from1}_pressed`, 1))
      .to(toEvent),
  );
  return manipulators;
}
