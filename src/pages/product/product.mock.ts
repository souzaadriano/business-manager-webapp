import { TRowDataProps, TTableHeader } from '../../components/table/table.types';

const headers: TTableHeader[] = [
  { key: 'name', value: 'Nome' },
  { key: 'price', value: 'Preço' },
  { key: 'category', value: 'Categoria' },
];

const data: TRowDataProps[][] = [
  [{ value: 'Cerveja Skol', bagde: 'Promocional' }, { value: 'R$ 2.50', bagde: 'R$ 3.50' }, { value: 'Cerveja' }],
  [{ value: 'Cerveja Becks' }, { value: 'R$ 8.00' }, { value: 'Cerveja' }],
  [{ value: 'Cerveja Colorado', bagde: 'Promocional' }, { value: 'R$ 7.00', bagde: 'R$ 9.00' }, { value: 'Cerveja' }],
  [{ value: 'Copão Passaporte' }, { value: 'R$ 10.00' }, { value: 'Drink' }],
];

export const productPageMock = { headers, data };
