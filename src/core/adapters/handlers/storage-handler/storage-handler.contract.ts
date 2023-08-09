export interface IStorageHandler {
  set(key: string, value: string): void;
  get(key: string): string | undefined;
  has(key: string): boolean;
  delete(key: string | string[]): void;
  setNumber(key: string, value: number): void;
  getNumber(key: string): number | undefined;
  setBoolean(key: string, value: boolean): void;
  getBoolean(key: string): boolean;
  setList<T = any>(key: string, value: T[]): void;
  getList<T = any>(key: string): T[];
  appendList<T = any>(key: string, value: T): void;
  setObject<T = any>(key: string, value: T): void;
  getObject<T = any>(key: string): T | undefined;
}
