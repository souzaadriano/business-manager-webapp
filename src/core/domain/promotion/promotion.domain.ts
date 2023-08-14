import { Product } from '../product/product.domain';

export class Promotion {
  readonly id: string;
  readonly _products: Map<string, Product>;
  readonly rules: 

  get products(): Product[] {
    return Array.from(this._products.values());
  }

  getProduct() {}
}
