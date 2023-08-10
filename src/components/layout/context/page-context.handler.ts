import { Dispatch } from 'react';
import { IPage, IPageContext } from './page-context.contract';

export class PageContextHandler implements IPageContext {
  constructor(private readonly _dependencies: TDependencies) {}

  static initializer(): IPage {
    return { current: 'Home' };
  }

  setPage(page: string): void {
    const { setPage } = this._dependencies;
    setPage({ current: page });
  }

  get current() {
    const { page } = this._dependencies;
    return page.current;
  }
}

type TDependencies = {
  page: IPage;
  setPage: Dispatch<React.SetStateAction<IPage>>;
};
