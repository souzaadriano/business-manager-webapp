import { DateTime } from '@/core/class/date-time/date-time.class';
import { DATE_FORMAT, TDateInterval, TDateMath } from './types';

export interface IDateHandler {
  sum(date: Date, value: TDateMath): Date;
  sub(date: Date, value: TDateMath): Date;
  isAfter(date: Date, toCompare: Date): boolean;
  isBefore(date: Date, toCompare: Date): boolean;
  isInInterval(date: Date, interval: TDateInterval): boolean;
  isNotInInterval(date: Date, interval: TDateInterval): boolean;
  format(date: Date, format?: DATE_FORMAT): string;
  parseString(date: string, format?: DATE_FORMAT): Date;
  toDateTime(date: Date | string | number): DateTime;
}
