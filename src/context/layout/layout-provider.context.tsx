import { useState } from 'react';
import { ContextHelper } from '../context.helper';
import { TContextComponent } from '../context.type';
import { ILayout, ILayoutContext } from './layout-context.contract';
import { LayoutContextHandler } from './layout-context.handler';

export const LayoutContext = ContextHelper.create<ILayoutContext>();

export const LayoutContextProvider: TContextComponent = ({ children }) => {
  const [layout, setLayout] = useState<ILayout>(LayoutContextHandler.initializer());
  const handler = new LayoutContextHandler({ layout, setLayout });

  return <LayoutContext.Provider value={handler}>{children}</LayoutContext.Provider>;
};
