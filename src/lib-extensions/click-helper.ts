import {
  FromKeyCode,
  FromKeyParam,
  ifVar,
  map,
  ModifierParam,
  ToKeyParam,
  toSetVar,
} from 'karabiner.ts';

export class ClickHelper {
  private readonly setupForClickSequences: FromKeyParam[] = [];
  private readonly postProcessManipulators: ReturnType<typeof map>[] = [];

  private setupFirstClick(from1: FromKeyParam) {
    if (!this.setupForClickSequences.includes(from1)) {
      this.setupForClickSequences.push(from1);
      this.postProcessManipulators.push(
        map(from1)
          .condition(ifVar(`${from1}_pressed`, 0))
          .to(toSetVar(`${from1}_pressed`, 1))
          .to(toSetVar(`${from1}_held_down`, 1))
          .toAfterKeyUp(toSetVar(`${from1}_held_down`, 0))
          .toDelayedAction(
            toSetVar(`${from1}_pressed`, 0),
            toSetVar(`${from1}_pressed`, 0),
          )
          .parameters({
            'basic.to_delayed_action_delay_milliseconds': 500,
          }),
      );
    }
  }

  twoClickSequence(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ReturnType<typeof map>) => ReturnType<typeof map>,
  ) {
    this.setupFirstClick(from1);
    return applyTo(
      map(from2)
        .toVar(`${from1}_pressed`, 0)
        .toNotificationMessage('apply-click-2', 'apply-click-2')
        .condition(ifVar(`${from1}_pressed`, 1))
        .condition(ifVar(`${from1}_held_down`, 0)),
    );
  }

  secondKeyPressedWhileFirstHeldDown(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ReturnType<typeof map>) => ReturnType<typeof map>,
  ) {
    this.setupFirstClick(from1);
    return applyTo(
      map(from2)
        .condition(ifVar(`${from1}_pressed`, 1))
        .condition(ifVar(`${from1}_held_down`, 1)),
    );
  }

  setupBasic(
    from: [FromKeyCode, ModifierParam | undefined, ModifierParam | undefined],
    to: [ToKeyParam, ModifierParam | undefined],
  ) {
    return map(...from).toIfAlone(...to);
  }

  getPostProcessManipulators() {
    return this.postProcessManipulators;
  }
}
