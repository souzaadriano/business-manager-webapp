import { ControllDates } from '@/core/class/controll-dates/control-dates.class';
import { Price } from '@/core/class/price/price.class';
import { Product } from '@/core/domain/product/product.domain';
import { TRowDataProps, TTableHeader } from '../../components/table/table.types';

const headers: TTableHeader[] = [
  { key: 'name', value: 'Nome' },
  { key: 'price', value: 'Preço' },
  { key: 'category', value: 'Categoria' },
  { key: 'details', value: 'Detalhes' },
];

const data: TRowDataProps[][] = [
  [{ value: 'Cerveja Skol', bagde: 'Promocional' }, { value: 'R$ 2.50', bagde: 'R$ 3.50' }, { value: 'Cerveja' }],
  [{ value: 'Cerveja Becks' }, { value: 'R$ 8.00' }, { value: 'Cerveja' }],
  [{ value: 'Cerveja Colorado', bagde: 'Promocional' }, { value: 'R$ 7.00', bagde: 'R$ 9.00' }, { value: 'Cerveja' }],
  [{ value: 'Copão Passaporte' }, { value: 'R$ 10.00' }, { value: 'Drink' }],
];

const controllDates = ControllDates.factory({
  createdAt: '2023-08-13',
  updatedAt: '2023-08-13',
  deletedAt: null,
});

const products = [
  new Product({
    category: 'cerveja',
    date: controllDates,
    description: 'cerveja pilsen',
    id: '1',
    image: null,
    name: 'Skol',
    price: Price.factory(3),
  }),
  new Product({
    category: 'cerveja',
    date: controllDates,
    description: 'cerveja pilsen',
    id: '2',
    image: null,
    name: 'Bhrama',
    price: Price.factory(3),
  }),
  new Product({
    category: 'cerveja',
    date: controllDates,
    description: 'cerveja pilsen',
    id: '3',
    image: null,
    name: 'Becks',
    price: Price.factory(8),
  }),
  new Product({
    category: 'drink',
    date: controllDates,
    description: 'Copo wiskey com energetico',
    id: '4',
    image: null,
    name: 'Copo Xeleleu',
    price: Price.factory(7),
  }),
  new Product({
    category: 'drink',
    date: controllDates,
    description: 'Copo wiskey com energetico',
    id: '5',
    image: null,
    name: 'Copo passaporte',
    price: Price.factory(15),
  }),
  new Product({
    category: 'drink',
    date: controllDates,
    description: 'Copo wiskey com energetico',
    id: '6',
    image: null,
    name: 'Copo passaporte',
    price: Price.factory(15),
  }),
];

export const productPageMock = { headers, data, products };
