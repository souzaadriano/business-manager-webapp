import { ControllDates } from '@/core/class/controll-dates/control-dates.class';
import { Price } from '@/core/class/price/price.class';
import { Url } from '@/core/class/url/url.class';

export type TProductConstructor = {
  id: string;
  name: string;
  price: Price;
  category: string;
  description: string;
  image: Url | null;
  date: ControllDates;
};
