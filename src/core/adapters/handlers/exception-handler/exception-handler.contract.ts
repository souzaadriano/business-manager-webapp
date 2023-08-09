import { AbstractException } from '../../../domain/exception/exception.abstract';

export interface IExceptionHandler<OUTPUT> {
  handle(exception: AbstractException | Error | string): OUTPUT;
}
