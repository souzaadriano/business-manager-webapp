import { TComponent } from '../../helpers/react.helper';
import { RowData } from './components/row-data.componenet';
import { TableHeader } from './components/table-header.componenet';
import { TableRow } from './components/table-row.componenet';
import { TTableProps } from './table.types';

export const Table: TComponent<TTableProps> = (props) => {
  const { headers, selectable, data } = props;

  const generateRows = () => {
    return data.map((rows, rowId) => (
      <TableRow key={rowId} selectable={selectable}>
        {rows.map(({ value, bagde }, dataId) => (
          <RowData key={dataId} value={value} bagde={bagde} />
        ))}
      </TableRow>
    ));
  };

  return (
    <div className="flex-col align-middle justify-center">
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <TableHeader selectable={selectable} headers={headers} />
          <tbody>
            {generateRows()}

            {/* row 4 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>

              <td>
                Wyman-Ledner
                <br />
                <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <td>
                <button className="btn btn-ghost btn-xs">details</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn">Page 22</button>
              <button className="join-item btn">»</button>
            </div>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
