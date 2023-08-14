export abstract class ArrayHelper {
  static lastValue<T>(item: T[]): T {
    return item[item.length - 1];
  }
}
