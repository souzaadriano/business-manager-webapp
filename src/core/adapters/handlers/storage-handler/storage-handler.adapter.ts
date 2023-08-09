import { AbstractHandler } from '../handler.abstract';
import { IStorageHandler } from './storage-handler.contract';

export class StorageHandler extends AbstractHandler implements IStorageHandler {
  has(key: string): boolean {
    const data = this.get(key);
    if (!data) return false;

    return true;
  }

  delete(key: string | string[]): void {
    Array.isArray(key) ? this._deleteManyKeys(key) : this._deleteOneKey(key);
  }

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): string | undefined {
    const payload = localStorage.getItem(key);
    return payload ? payload : undefined;
  }

  setNumber(key: string, value: number): void {
    this.set(key, value.toString());
  }

  getNumber(key: string): number | undefined {
    const value = this.get(key);
    if (value) return Number(value);
  }

  setBoolean(key: string, value: boolean): void {
    this.set(key, value.toString());
  }

  getBoolean(key: string): boolean {
    const value = this.get(key);
    if (value === 'true') return true;
    return false;
  }

  setList<T = any>(key: string, value: T[]): void {
    this.set(key, JSON.stringify(value));
  }

  getList<T = any>(key: string): T[] {
    const value = this.get(key);
    if (value) return JSON.parse(value);
    return [];
  }

  appendList<T = any>(key: string, value: T): void {
    const data = this.getList<T>(key);
    data.push(value);
    this.setList<T>(key, data);
  }

  setObject<T = any>(key: string, value: T): void {
    this.set(key, JSON.stringify(value));
  }

  getObject<T = any>(key: string): T | undefined {
    const value = this.get(key);
    if (value) return JSON.parse(value);
  }

  private _deleteManyKeys(keys: string[]) {
    keys.forEach((key) => localStorage.removeItem(key));
  }

  private _deleteOneKey(key: string) {
    localStorage.removeItem(key);
  }
}
