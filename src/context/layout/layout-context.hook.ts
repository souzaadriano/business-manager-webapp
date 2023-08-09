import { useContext } from 'react';
import { ILayoutContext } from './layout-context.contract';
import { LayoutContext } from './layout-provider.context';

export const useLayoutContext = (): ILayoutContext => {
  const layoutContext = useContext(LayoutContext);
  if (!layoutContext) throw new Error('layout-context not found');

  return layoutContext;
};
