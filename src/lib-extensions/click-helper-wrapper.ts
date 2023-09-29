import { ClickHelper, ManipulatorBuilder } from './click-helper';
import { Shortcuts } from '../shortcuts/shortcut-helpers';
import {
  Condition,
  ConditionBuilder,
  FromKeyParam,
  rule,
  writeToProfile,
} from 'karabiner.ts';

export class ClickHelperWrapper {
  private readonly rulesAndClickHelpers: Record<
    string,
    { conditions: (Condition | ConditionBuilder)[]; clickHelper: ClickHelper }
  > = {};
  private currentClickHelper: ClickHelper | undefined = undefined;
  private additionalRules: ReturnType<typeof rule>[] = [];
  constructor(private readonly profile = 'Default profile') {}

  startRule(
    ruleName: string,
    conditions: (Condition | ConditionBuilder)[],
  ): void {
    if (ruleName in this.rulesAndClickHelpers) {
      throw new Error(`Rule ${ruleName} already started`);
    }
    this.currentClickHelper = new ClickHelper();
    this.rulesAndClickHelpers[ruleName] = {
      conditions,
      clickHelper: this.currentClickHelper,
    };
  }

  addRule(ruleToAdd: ReturnType<typeof rule>) {
    this.additionalRules.push(ruleToAdd);
  }

  registerTwoClickSequence(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ManipulatorBuilder) => ManipulatorBuilder,
  ): void {
    this.currentClickHelper?.registerTwoClickSequence(from1, from2, applyTo);
  }

  registerSecondKeyPressedWhileFirstHeldDown(
    from1: FromKeyParam,
    from2: FromKeyParam,
    applyTo: (builder: ManipulatorBuilder) => ManipulatorBuilder,
  ): void {
    this.currentClickHelper?.registerSecondKeyPressedWhileFirstHeldDown(
      from1,
      from2,
      applyTo,
    );
  }

  getRules(): ReturnType<typeof rule>[] {
    const getRulesByManipulatorType = (kind: 'second' | 'first' | 'single') =>
      Object.entries(this.rulesAndClickHelpers)
        .map(([ruleName, { conditions, clickHelper }]) => {
          const manipulators =
            kind === 'second'
              ? clickHelper.getSecondKeyManipulators()
              : kind === 'first'
              ? clickHelper.getFirstKeyManipulators()
              : clickHelper.getSingleKeyManipulators();
          if (manipulators.length === 0) return undefined;
          return rule(`${ruleName}-${kind}`, ...conditions).manipulators(
            manipulators,
          );
        })
        .filter((rule) => rule) as ReturnType<typeof rule>[];
    return [
      ...getRulesByManipulatorType('second'),
      ...getRulesByManipulatorType('first'),
      ...getRulesByManipulatorType('single'),
      ...this.additionalRules,
    ];
  }

  applyRules() {
    writeToProfile(this.profile, this.getRules());
  }

  registerShortcuts<T extends string>(shortcuts: Shortcuts<T>): void {
    this.verifyRuleStarted();
    this.currentClickHelper?.registerShortcuts(shortcuts);
  }

  private verifyRuleStarted() {
    if (!this.currentClickHelper)
      throw new Error('A rule has not been started yet');
  }
}
