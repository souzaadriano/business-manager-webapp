import { TYPE_SET } from './constants/type-set.constant';
import { URL_PREFIX_SET } from './constants/url-prefix-set.contant';
import { URL_CONTENT_TYPE } from './types/url-content-type.enum';

export abstract class UrlHelper {
  static getContentType(value: string): URL_CONTENT_TYPE {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, ...type] = value.split('.');

    if (!type) return URL_CONTENT_TYPE.ENDPOINT;
    if (TYPE_SET.data.has(UrlHelper._getType(type))) return URL_CONTENT_TYPE.DATA;
    if (TYPE_SET.sheet.has(UrlHelper._getType(type))) return URL_CONTENT_TYPE.SHEET;
    if (TYPE_SET.document.has(UrlHelper._getType(type))) return URL_CONTENT_TYPE.DOCUMENT;
    if (TYPE_SET.image.has(UrlHelper._getType(type))) return URL_CONTENT_TYPE.IMAGE;

    return URL_CONTENT_TYPE.UNKNOWN;
  }

  static validatePrefix(value: string): boolean {
    return URL_PREFIX_SET.has(value) || value.startsWith('www');
  }

  private static _getType(value: string[]) {
    return value[value.length - 1];
  }
}
