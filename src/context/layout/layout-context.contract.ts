export interface ILayout {
  menu: boolean;
  header: boolean;
}

export interface ILayoutContext extends ILayout {
  toggleMenu(): void;
  showLayout(): void;
  hideLayout(): void;
}
