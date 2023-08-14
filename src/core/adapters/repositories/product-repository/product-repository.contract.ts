import { TProduct } from './types/product.type';

export interface IProductRepository {
  list(): TProduct;
}
