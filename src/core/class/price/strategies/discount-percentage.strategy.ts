import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';
import { TDiscount } from '../types/discount.type';
import { IDiscountStrategy } from './dicount-strategy.contract';

export class PercentageDiscountStrategy implements IDiscountStrategy {
  readonly shouldUse = DISCOUNT_STRATEGY.PERCENTAGE;

  apply(currentValue: number, discountValue: number): TDiscount {
    const onePercentValue = currentValue / 100;
    const valueToSubtract = discountValue * onePercentValue;

    return {
      value: currentValue - valueToSubtract,
      discountValue: valueToSubtract,
      discount: discountValue,
      type: this.shouldUse,
    };
  }
}
