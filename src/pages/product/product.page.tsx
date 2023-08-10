import { Table } from '../../components/table/table.componenet';
import { productPageMock } from './product.mock';

export const ProductPage = () => {
  const { headers, data } = productPageMock;
  return (
    <div>
      <Table headers={headers} data={data} selectable />
    </div>
  );
};
