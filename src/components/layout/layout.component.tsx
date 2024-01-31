import { TComponent } from '../../helpers/react.helper';
import { Menu } from './components/menu/menu.component';
import { PageContextProvider } from './context/page-context.provider';

export const Layout: TComponent = ({ children }) => {
  return (
    <PageContextProvider>
      <Menu></Menu>
      {children}
    </PageContextProvider>
  );
};
