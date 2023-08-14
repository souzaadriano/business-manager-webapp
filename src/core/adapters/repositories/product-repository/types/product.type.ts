import { TControllDatesFactoryInput } from '@/core/class/controll-dates/control-dates.class';

export type TProduct = TControllDatesFactoryInput & {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string | null;
};
