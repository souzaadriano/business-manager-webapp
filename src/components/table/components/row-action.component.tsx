import { TComponent } from '@/helpers/react.helper';

export const RowAction: TComponent<TRowAction> = ({ handler, label }) => {
  return (
    <td>
      <button onClick={handler} className="btn btn-ghost btn-xs">
        {label}
      </button>
    </td>
  );
};

export type TRowAction = {
  label: string;
  handler: TRowAsyncActionHandler | TRowActionHandler;
};

export type TRowAsyncActionHandler = () => Promise<void>;

export type TRowActionHandler = () => void;
