import { Pagination } from '@/core/class/pagination/pagination.class';
import { TDefaultItensPerPage } from '@/core/class/pagination/pagination.types';
import { ClassProperties } from '@/helpers/object.helper';

export interface Filter<T, ITENS_PER_PAGE extends number = TDefaultItensPerPage> {
  page: Pagination<ITENS_PER_PAGE>;
  dto(): ClassProperties<Filter<T>>;
}
