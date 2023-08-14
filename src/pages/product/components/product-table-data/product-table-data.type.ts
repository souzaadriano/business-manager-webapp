import { Product } from '@/core/domain/product/product.domain';
import { THandlerFactory } from '@/helpers/react.helper';

export type ProductTableDataProperties = {
  handlers: ProductTableDataHandlers;
  data: Product[];
};

export type ProductTableDataHandlers = {
  detailsHandler: THandlerFactory<Product, void>;
};
