import { Product } from '@/core/domain/product/product.domain';

export class ProductListModel {
  private readonly _content = new Map<string, Product>();

  add(product: Product | Product[]) {
    Array.isArray(product) ? this._addMany(product) : this._content.set(product.id, product);
  }

  private _addMany(products: Product[]) {
    products.forEach((product) => this._content.set(product.id, product));
  }

  clear(): number {
    const quantity = this._content.size;
    this._content.clear();
    return quantity;
  }

  remove(quantity: number) {
    Array.from(this._content.keys())
      .slice(0, quantity)
      .forEach((key) => this._content.delete(key));
  }
}
