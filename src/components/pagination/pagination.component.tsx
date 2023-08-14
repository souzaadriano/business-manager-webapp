import { TComponent } from '@/helpers/react.helper';
import { TPaginationProps } from './pagination.types';

export const Pagination: TComponent<TPaginationProps> = ({ currentPage, next, previous }) => {
  return (
    <div className="join">
      <button onClick={previous} className="join-item btn">
        «
      </button>
      <button className="join-item btn">{currentPage}</button>
      <button onClick={next} className="join-item btn">
        »
      </button>
    </div>
  );
};
