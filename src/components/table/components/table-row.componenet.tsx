import { TComponent } from '../../../helpers/react.helper';
import { TTableRowProps } from '../table.types';

export const TableRow: TComponent<TTableRowProps> = (props) => {
  const { selectable, children } = props;

  return (
    <tr>
      {selectable && (
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
      )}
      {children}
    </tr>
  );
};
