import { DISCOUNT_STRATEGY } from '../discount-strategy.enum';

export type TDiscountInput = {
  strategy: DISCOUNT_STRATEGY;
  value: number;
};
