import { useLayoutContext } from '../../../../context/layout/layout-context.hook';
import { TComponent } from '../../../../helpers/react.helper';
import { HomeIcon } from '../../../icons';
import { Header } from '../header/header.component';
import { MenuLink } from './menu-link.component';

import { useUserContext } from '../../../../context';

export const Menu: TComponent = ({ children }) => {
  const userContext = useUserContext();  
  if (userContext.logged === true) {
    const layout = useLayoutContext();
    return (
      <div className={layout.menu ? 'drawer drawer-open' : 'drawer'}>
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Header />
          <div className={layout.menu ? 'm-4' : 'm-2'}>{children}</div>
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
            <MenuLink label="Sales" path="/sales">
              <HomeIcon />
            </MenuLink>
          </ul>
        </div>
      </div>
    );
  }
};
