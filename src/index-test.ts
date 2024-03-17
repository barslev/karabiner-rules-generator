import {
  ifVar,
  map,
  rule,
  toNotificationMessage,
  toRemoveNotificationMessage,
  toSetVar,
  writeToProfile,
} from 'karabiner.ts';
import {
  postProcessManipulators,
  secondKeyPressedWhileFirstHeldDown,
  twoClickSequence,
} from './lib-extensions/lib-extensions';
import disableUnusedKeysInSpecialModes from './rules/general/disable-unused-keys-in-special-modes';

writeToProfile('Default profile', [
  rule('someRule').manipulators([
    map('caps_lock')
      .to(toSetVar('vim_mode', 1))
      .to(toNotificationMessage('mode', 'vim')),
  ]),
  rule('someRule3').manipulators([
    map('caps_lock', 'left_command')
      .to(toSetVar('vim_mode', 0))
      .to(toRemoveNotificationMessage('mode')),
  ]),
  rule('someRule2', ifVar('vim_mode', 1)).manipulators([
    map('d').to(toNotificationMessage('single d pressed', 'single-d-pressed')),
    twoClickSequence('d', 'd', (x) =>
      x
        .toNotificationMessage('foo', 'd,d pressed')
        .toDelayedAction(
          toRemoveNotificationMessage('foo'),
          toRemoveNotificationMessage('foo'),
        )
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 1000 }),
    ),
    secondKeyPressedWhileFirstHeldDown('d', 's', (x) =>
      x
        .toNotificationMessage('bar', 'd,s helddown')
        .toDelayedAction(
          toRemoveNotificationMessage('bar'),
          toRemoveNotificationMessage('bar'),
        ),
    ),
    twoClickSequence('d', 's', (x) =>
      x
        .toNotificationMessage('foo', 'd,s pressed')
        .toDelayedAction(
          toRemoveNotificationMessage('foo'),
          toRemoveNotificationMessage('foo'),
        )
        .parameters({ 'basic.to_delayed_action_delay_milliseconds': 1000 }),
    ),
    map('q')
      .toRemoveNotificationMessage('foo')
      .to(toRemoveNotificationMessage('apply-click-2'))
      .to(toRemoveNotificationMessage('delatedy-ad'))
      .to(toRemoveNotificationMessage('delated-ad'))
      .to(toRemoveNotificationMessage('delatedy-adfdfd'))
      .to(toRemoveNotificationMessage('single d pressed')),
    ...postProcessManipulators,
  ]),
  ...disableUnusedKeysInSpecialModes,
]);
