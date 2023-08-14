import { TComponent } from '../../../helpers/react.helper';
import { TRowDataProps } from '../table.types';

export const RowData: TComponent<TRowDataProps> = (props) => {
  const { value, bagde, children } = props;
  return (
    <td>
      {children ?? value ?? ''}
      {bagde && <br />}
      {bagde && <span className="badge badge-ghost badge-sm">{bagde}</span>}
    </td>
  );
};
