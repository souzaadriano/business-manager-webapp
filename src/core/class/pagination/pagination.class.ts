import { TPagination } from '@/core/adapters/repositories/shared/pagination.type';
import { TDefaultItensPerPage } from './pagination.types';

export class Pagination<T extends number = TDefaultItensPerPage> {
  private _current: number;
  private _itensPerPage: number;
  private _itensCount: number;

  constructor(properties: TPaginationConstructor<T>) {
    this._current = properties.current;
    this._itensPerPage = properties.itensPerPage;
    this._itensCount = properties.itensCount;
  }

  static create<T extends number = TDefaultItensPerPage>(itensPerPage: T): Pagination<T> {
    return new Pagination<T>({
      current: 1,
      itensPerPage,
      itensCount: itensPerPage,
    });
  }

  next(): TPagination {
    if (this._isLastPage()) return this.dto();
    this._current = this._current + 1;

    return this.dto();
  }

  previous(): TPagination {
    if (this._isFirstPage()) return this.dto();
    this._current = this._current - 1;
    return this.dto();
  }

  setItensPerPage(value: T) {
    this._itensPerPage = value;
  }

  setItensCount(value: number): void {
    this._itensCount = value;
  }

  dto(): TPagination {
    return { current: this._current, itensPerPage: this._itensPerPage };
  }

  private _isLastPage(): boolean {
    if (!this._itensCount) return true;
    return this._current < this._maxPage;
  }

  private get _maxPage(): number {
    if (!this._itensCount) return 1;
    return Math.ceil(this._itensCount / this._itensPerPage);
  }

  private _isFirstPage(): boolean {
    return this._current > 1;
  }
}

type TPaginationConstructor<T extends number> = {
  current: number;
  itensPerPage: T;
  itensCount: number;
};
