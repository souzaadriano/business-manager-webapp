export interface IPage {
  current: string;
}

export interface IPageContext extends IPage {
  setPage(page: string): void;
}
