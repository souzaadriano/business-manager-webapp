import { PriceHelper } from './price.helper';
import { DiscountStrategy } from './strategies';
import { CURRENCY_TYPE } from './types/currency-type.enum';
import { TDiscountInput } from './types/discount-input.type';
import { TDiscount } from './types/discount.type';

export class Price {
  private readonly _formater: Intl.NumberFormat;
  private _discount?: TDiscount;

  constructor(private readonly _value: number, formater: Intl.NumberFormat) {
    this._formater = formater;
  }

  static factory(value: number, currencyType?: CURRENCY_TYPE) {
    return new Price(value, PriceHelper.getFormater(currencyType ?? CURRENCY_TYPE.REAIS));
  }

  get rawValue(): number {
    return this._value;
  }

  get value(): number {
    return this.discount?.value ?? this._value;
  }

  get discount(): TDiscount | undefined {
    return this._discount;
  }

  get currency(): string {
    return this._formater.format(this._discount?.value ?? this._value);
  }

  applyDiscount(discount: TDiscountInput) {
    const result = this._applyDiscount(discount);
    this._discount = result;
    return result.value;
  }

  private _applyDiscount(discount: TDiscountInput): TDiscount {
    return DiscountStrategy.apply({ ...discount, currentValue: this._value });
  }
}
