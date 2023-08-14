import { TControllDatesFactoryInput } from '@/core/class/controll-dates/control-dates.class';

export type TProducFactoryInput = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string | null;
  date: TControllDatesFactoryInput;
};
