import { TComponent } from '../../../helpers/react.helper';
import { TTableHeaderProps } from '../table.types';

export const TableHeader: TComponent<TTableHeaderProps> = ({ headers, selectable }) => {
  const generateHeaders = () => {
    return headers.map((header) => <th key={header.key}>{header.value}</th>);
  };
  return (
    <thead>
      <tr>
        {selectable && (
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
        )}
        {generateHeaders()}
      </tr>
    </thead>
  );
};
