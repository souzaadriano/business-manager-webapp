import { Dispatch } from 'react';
import { ILayout, ILayoutContext } from './layout-context.contract';

export class LayoutContextHandler implements ILayoutContext {
  private readonly _setLayout: Dispatch<React.SetStateAction<ILayout>>;
  private readonly _layout: ILayout;

  constructor(input: TConstructor) {
    this._setLayout = input.setLayout;
    this._layout = input.layout;
  }

  static initializer(): ILayout {
    return { menu: false, header: false };
  }

  toggleMenu(): void {
    this._setLayout({ ...this._layout, menu: !this._layout.menu });
  }

  hideLayout(): void {
    return this._setLayout({ menu: false, header: false });
  }

  showLayout(): void {
    return this._setLayout({ menu: true, header: true });
  }

  get menu() {
    return this._layout.menu;
  }

  get header() {
    return this._layout.header;
  }
}

type TConstructor = {
  setLayout: Dispatch<React.SetStateAction<ILayout>>;
  layout: ILayout;
};
