export abstract class ObjectHelper {
  static update(from: Record<string, any>, to: Record<string, any>): void {
    for (const key in from) Object.defineProperty(to, key, { value: from[key] });
  }
}

export type ClassProperties<T> = Pick<
  T,
  {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [K in keyof T]: T[K] extends Function ? never : K;
  }[keyof T]
>;
