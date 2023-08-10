import { useContext } from 'react';
import { PageContext } from './page-context.provider';

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error('page-context not found');

  return context;
};
