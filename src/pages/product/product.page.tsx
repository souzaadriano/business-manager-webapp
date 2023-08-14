import { Product } from '@/core/domain/product/product.domain';
import { useState } from 'react';
import { Table } from '../../components/table/table.componenet';
import { ProductTableData } from './components/product-table-data/product-table-data.component';
import { productPageMock } from './product.mock';

export const ProductPage = () => {
  const { headers } = productPageMock;
  const [currentPage, setPage] = useState(1);
  const detailsHandler = (product: Product) => () => {
    alert(`${product.name}, ${product.price}`);
  };

  const nextPage = () => {
    if (currentPage < 6) setPage(currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setPage(currentPage - 1);
  };

  return (
    <div>
      <Table currentPage={currentPage} next={nextPage} previous={previousPage} headers={headers} selectable>
        <ProductTableData data={productPageMock.products} handlers={{ detailsHandler }} />
      </Table>
    </div>
  );
};
