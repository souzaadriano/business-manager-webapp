import { ArrayHelper } from '@/helpers/array.helper';
import { URL_CONTENT_TYPE } from './types/url-content-type.enum';
import { UrlHelper } from './url.helper';

export class Url {
  readonly isStatic: boolean;
  readonly type: URL_CONTENT_TYPE;
  readonly value: string;

  constructor(input: TUrlConstructor) {
    const { contentType, staticFile, url } = input;
    this.isStatic = staticFile;
    this.type = contentType;
    this.value = url;
  }

  static factory(value: string): Url {
    const contentType = Url._validate(value);

    return new Url({
      contentType,
      staticFile: contentType !== URL_CONTENT_TYPE.ENDPOINT,
      url: value,
    });
  }

  private static _validate(value: string) {
    const [prefix, ...urlPath] = value.split('/');
    Url._validatePrefix(prefix);
    Url._validatePath(urlPath);

    const lastPath = ArrayHelper.lastValue(urlPath);
    const type = UrlHelper.getContentType(lastPath);

    return type;
  }

  private static _validatePrefix(value: string): void {
    if (UrlHelper.validatePrefix(value)) return;

    throw new Error();
  }

  private static _validatePath(path: string[]): string[] {
    if (path.length) return path;

    throw new Error();
  }
}

export type TUrlConstructor = {
  staticFile: boolean;
  contentType: URL_CONTENT_TYPE;
  url: string;
};
