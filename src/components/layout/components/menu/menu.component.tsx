import { useLayoutContext } from '../../../../context/layout/layout-context.hook';
import { TComponent } from '../../../../helpers/react.helper';
import { HomeIcon } from '../../../icons';
import { Header } from '../header/header.component';
import { MenuLink } from './menu-link.component';

export const Menu: TComponent = ({ children }) => {
  const layout = useLayoutContext();
  return (
    <div className={layout.menu ? 'drawer drawer-open' : 'drawer'}>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Header />
        <div className={layout.menu ? 'm-4 overflow-auto' : 'm-2 overflow-auto'}>{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
          <MenuLink label="Home" path="/">
            <HomeIcon />
          </MenuLink>
          <MenuLink label="Sandbox" path="/sandbox">
            <HomeIcon />
          </MenuLink>
          <MenuLink label="Products" path="/products">
            <HomeIcon />
          </MenuLink>
        </ul>
      </div>
    </div>
  );
};
