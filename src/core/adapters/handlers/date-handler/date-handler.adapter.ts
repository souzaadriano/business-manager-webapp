import { DateTime } from '@/core/class/date-time/date-time.class';
import { add, format, isAfter, isBefore, isEqual, parse, sub } from 'date-fns';
import { AbstractHandler } from '../handler.abstract';
import { IDateHandler } from './date-handler.contract';
import { DATE_FORMAT, TDateInterval, TDateMath } from './types';
import { TDate } from './types/date.type';

export class DateHandler extends AbstractHandler implements IDateHandler {
  sum(date: Date, value: TDateMath): Date {
    return add(date, value);
  }

  sub(date: Date, value: TDateMath): Date {
    return sub(date, value);
  }

  isAfter(date: Date, toCompare: Date): boolean {
    return isAfter(date, toCompare);
  }

  isBefore(date: Date, toCompare: Date): boolean {
    return isBefore(date, toCompare);
  }

  isInInterval(date: Date, interval: TDateInterval): boolean {
    const { startDate, endDate } = interval;
    if (isEqual(date, startDate) || isEqual(date, endDate)) return true;
    const isBefore = this.isBefore(date, endDate);
    const isAfter = this.isAfter(date, startDate);

    return isBefore && isAfter;
  }

  isNotInInterval(date: Date, interval: TDateInterval): boolean {
    const { startDate, endDate } = interval;
    if (!isEqual(date, startDate) || !isEqual(date, endDate)) return true;
    const isBefore = this.isBefore(date, startDate);
    const isAfter = this.isAfter(date, endDate);

    return isBefore && isAfter;
  }

  format(date: Date, dateFormat?: DATE_FORMAT | undefined): string {
    return format(date, this._defaultFormat(dateFormat));
  }

  parseString(date: string, format?: DATE_FORMAT | undefined): Date {
    return parse(date, this._defaultFormat(format), new Date());
  }

  toDateTime(date: TDate): DateTime {
    if (typeof date === 'string') return new DateTime(this.parseString(date), this);
    if (typeof date === 'number') return new DateTime(new Date(date), this);
    return new DateTime(date, this);
  }

  private _defaultFormat(format?: DATE_FORMAT) {
    return format ?? DATE_FORMAT.STANDARD;
  }
}
