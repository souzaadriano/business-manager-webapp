import { ControllDates } from '@/core/class/controll-dates/control-dates.class';
import { Price } from '@/core/class/price/price.class';
import { Url } from '@/core/class/url/url.class';
import { TProductConstructor } from './types/product-constructoor.type';
import { TProducFactoryInput } from './types/product-create-input.type';

export class Product {
  readonly id: string;
  readonly name: string;
  readonly price: Price;
  readonly category: string;
  readonly description: string;
  readonly image: Url | null;
  readonly date: ControllDates;

  constructor(product: TProductConstructor) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.description = product.description;
    this.image = product.image;
    this.date = product.date;
  }

  static factory(input: TProducFactoryInput): Product {
    return new Product({
      category: input.category,
      date: ControllDates.factory(input.date),
      description: input.description,
      id: input.id,
      image: input.image ? Url.factory(input.image) : null,
      name: input.name,
      price: Price.factory(input.price),
    });
  }
}
