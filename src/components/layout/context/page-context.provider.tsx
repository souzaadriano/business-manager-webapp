import { useState } from 'react';
import { ContextHelper } from '../../../context/context.helper';
import { TContextComponent } from '../../../context/context.type';
import { IPage, IPageContext } from './page-context.contract';
import { PageContextHandler } from './page-context.handler';

export const PageContext = ContextHelper.create<IPageContext>();

export const PageContextProvider: TContextComponent = ({ children }) => {
  const [page, setPage] = useState<IPage>(PageContextHandler.initializer());
  const handler = new PageContextHandler({ page, setPage });

  return <PageContext.Provider value={handler}>{children}</PageContext.Provider>;
};
