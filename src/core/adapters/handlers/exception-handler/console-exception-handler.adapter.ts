import { AbstractException } from '../../../domain/exception/exception.abstract';
import { AbstractHandler } from '../handler.abstract';
import { IExceptionHandler } from './exception-handler.contract';

export class ConsoleExceptionHandler extends AbstractHandler implements IExceptionHandler<void> {
  handle(exception: string | Error | AbstractException): void {
    console.error(exception);
  }
}
