import { createContext } from 'react';

export abstract class ContextHelper {
  static create<T>(initializer?: T) {
    return createContext<T | null>(initializer ?? null);
  }
}
