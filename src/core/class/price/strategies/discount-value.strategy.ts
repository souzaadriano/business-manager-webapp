import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';
import { TDiscount } from '../types/discount.type';
import { IDiscountStrategy } from './dicount-strategy.contract';

export class DiscountValueStrategy implements IDiscountStrategy {
  readonly shouldUse = DISCOUNT_STRATEGY.VALUE;

  apply(currentValue: number, discountValue: number): TDiscount {
    const discountedValue = currentValue - discountValue;
    const result = discountedValue >= 0 ? discountValue : 0;

    return {
      type: this.shouldUse,
      discount: this._percentage(currentValue, result),
      discountValue,
      value: result,
    };
  }

  private _percentage(currentValue: number, discountValue: number): number {
    return (discountValue / currentValue) * 100;
  }
}
