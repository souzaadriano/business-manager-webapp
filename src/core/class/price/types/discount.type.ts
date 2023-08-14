import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';

export type TDiscount = {
  type: DISCOUNT_STRATEGY;
  discount: number;
  discountValue: number;
  value: number;
};
