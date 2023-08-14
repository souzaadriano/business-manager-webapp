import { DateHandler } from '@/core/adapters/handlers/date-handler/date-handler.adapter';
import { IDateHandler } from '@/core/adapters/handlers/date-handler/date-handler.contract';

export abstract class DateHandlerFactory {
  private static _instance: IDateHandler;

  public static instance(): IDateHandler {
    if (DateHandlerFactory._instance) return DateHandlerFactory._instance;
    DateHandlerFactory._instance = new DateHandler();
    return DateHandlerFactory._instance;
  }
}
