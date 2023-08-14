import { CURRENCY_FORMATER } from './constants/currency-formater.constants';
import { CURRENCY_TYPE } from './types/currency-type.enum';

export abstract class PriceHelper {
  static getFormater(type: CURRENCY_TYPE) {
    const formater = CURRENCY_FORMATER.get(type);
    if (!formater) throw new Error();

    return formater;
  }
}
