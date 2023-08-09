import { useLayoutContext } from '../context/layout/layout-context.hook';
import { Header } from './layout/header/header';
import { Menu } from './layout/menu/menu';

export const Layout = () => {
  const layout = useLayoutContext();
  return (
    <>
      <Header />
      {layout.menu && <Menu />}
    </>
  );
};
