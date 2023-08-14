import { Pagination } from '@/core/class/pagination/pagination.class';
import { TDateRange, TNumberRange } from '@/core/types/range.type';
import { ClassProperties } from '@/helpers/object.helper';
import { Filter } from '../../shared/filter.contract';

export class ProductListFilter implements Filter<ProductListFilter> {
  name?: string;
  price?: TNumberRange;
  category: string[] = [];
  active?: boolean;
  createdAt?: TDateRange;
  updatedAt?: TDateRange;
  page: Pagination;

  private constructor(parameters: TProductListFilterConstructor) {
    this.name = parameters.name;
    this.price = parameters.price;
    this.category = parameters.category ?? [];
    this.active = parameters.active;
    this.createdAt = parameters.createdAt;
    this.updatedAt = parameters.updatedAt;
    this.page = Pagination.create(30);
  }

  dto(): ClassProperties<ProductListFilter> {
    return this;
  }

  static create(input?: TProductListFilterConstructor) {
    return new ProductListFilter(input ?? { itensPerPage: 10 });
  }

  setName(value: string): void {
    this.name = value;
  }

  setPrice(value: TNumberRange): void {
    this.price = value;
  }

  setCategory(value: string | string[]): void {
    Array.isArray(value) ? this.category.push(...value) : this.category.push(value);
  }

  setActive(value: boolean): void {
    this.active = value;
  }

  setCreatedAt(value: TDateRange): void {
    this.createdAt = value;
  }

  setUpdatedAt(value: TDateRange): void {
    this.updatedAt = value;
  }
}

export type TProductListFilterConstructor = {
  name?: string;
  price?: TNumberRange;
  category?: string[];
  active?: boolean;
  createdAt?: TDateRange;
  updatedAt?: TDateRange;
  itensPerPage: number;
};
