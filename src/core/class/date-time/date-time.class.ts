import { IDateHandler } from '@/core/adapters/handlers/date-handler/date-handler.contract';
import { DATE_FORMAT } from '@/core/adapters/handlers/date-handler/types';
import { TDate } from '@/core/adapters/handlers/date-handler/types/date.type';
import { DateHandlerFactory } from '@/core/factories';

export class DateTime {
  constructor(private _value: Date, private readonly _handler: IDateHandler) {}

  static factory(date: TDate): DateTime {
    const handler = DateHandlerFactory.instance();
    return handler.toDateTime(date);
  }

  static now(): DateTime {
    const handler = DateHandlerFactory.instance();
    return handler.toDateTime(new Date());
  }

  get value(): Date {
    return this._value;
  }

  format(dateFromat?: DATE_FORMAT): string {
    return this._handler.format(this._value, dateFromat);
  }
}
