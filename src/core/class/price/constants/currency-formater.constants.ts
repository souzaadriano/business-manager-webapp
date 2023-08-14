import { CURRENCY_TYPE } from '../types/currency-type.enum';

export const CURRENCY_FORMATER = new Map<CURRENCY_TYPE, Intl.NumberFormat>([
  [CURRENCY_TYPE.REAIS, new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })],
]);
