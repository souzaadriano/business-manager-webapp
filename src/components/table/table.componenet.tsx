import { TComponent } from '../../helpers/react.helper';
import { Pagination } from '../pagination/pagination.component';
import { TableHeader } from './components/table-header.componenet';
import { TTableProps } from './table.types';

export const Table: TComponent<TTableProps> = (props) => {
  const { headers, selectable, children, next, previous, currentPage } = props;

  return (
    <div className="flex-col align-middle justify-center">
      <div className="overflow-x-auto ">
        <table className="table">
          <TableHeader selectable={selectable} headers={headers} />
          <tbody>{children}</tbody>
          <tfoot>
            <Pagination currentPage={currentPage} next={next} previous={previous} />
          </tfoot>
        </table>
      </div>
    </div>
  );
};
