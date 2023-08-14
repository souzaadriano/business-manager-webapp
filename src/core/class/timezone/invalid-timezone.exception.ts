import { EXCEPTION_CODE } from '@/core/domain/exception/exception-code.enum';
import { AbstractException } from '@/core/domain/exception/exception.abstract';

export class InvalidTimezoneException extends AbstractException {
  constructor(timezone: string) {
    super(`invalid timezone: ${timezone}`);
    this._setDetails('timezone', timezone);
  }
  code = EXCEPTION_CODE.INVALID_INPUT;
}
