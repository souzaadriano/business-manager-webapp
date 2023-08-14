import { RowAction } from '@/components/table/components/row-action.component';
import { RowData } from '@/components/table/components/row-data.componenet';
import { TableRow } from '@/components/table/components/table-row.componenet';
import { TComponent } from '@/helpers/react.helper';
import { ProductTableDataProperties } from './product-table-data.type';

export const ProductTableData: TComponent<ProductTableDataProperties> = (properties) => {
  const { data, handlers } = properties;

  const generateRows = () => {
    return data.map((product) => {
      const detailsHandler = handlers.detailsHandler(product);
      return (
        <TableRow key={product.id} selectable>
          <RowData value={product.name} />
          <RowData value={product.price.currency} />
          <RowData value={product.category} />
          <RowAction label="Detalhes" handler={detailsHandler} />
        </TableRow>
      );
    });
  };

  return <>{generateRows()}</>;
};
