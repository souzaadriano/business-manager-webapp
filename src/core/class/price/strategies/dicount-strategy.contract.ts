import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';
import { TDiscount } from '../types/discount.type';

export interface IDiscountStrategy {
  readonly shouldUse: DISCOUNT_STRATEGY;
  apply(currentValue: number, discountValue: number): TDiscount;
}
