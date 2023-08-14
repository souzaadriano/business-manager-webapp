import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';
import { TDiscountInput } from '../types/discount-input.type';
import { TDiscount } from '../types/discount.type';
import { IDiscountStrategy } from './dicount-strategy.contract';
import { PercentageDiscountStrategy } from './discount-percentage.strategy';
import { DiscountValueStrategy } from './discount-value.strategy';

const discountStrategies: IDiscountStrategy[] = [new DiscountValueStrategy(), new PercentageDiscountStrategy()];

export abstract class DiscountStrategy {
  private static _strategies = new Map(discountStrategies.map((strategy) => [strategy.shouldUse, strategy]));

  static apply(input: TApplyDiscountInput): TDiscount {
    const { currentValue, strategy, value } = input;
    const handler = DiscountStrategy._getStrategy(strategy);

    return handler.apply(currentValue, value);
  }

  private static _getStrategy(strategy: DISCOUNT_STRATEGY): IDiscountStrategy {
    const handler = DiscountStrategy._strategies.get(strategy);
    if (!handler) throw new Error();

    return handler;
  }
}

export type TApplyDiscountInput = TDiscountInput & { currentValue: number };
