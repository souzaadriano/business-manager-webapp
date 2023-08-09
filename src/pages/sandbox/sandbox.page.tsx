import { Header } from '../../components/layout/header/header';
import { useLayoutContext } from '../../context/layout/layout-context.hook';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiJkMWNhOWMyMi1mMmE5LTQ0NDYtYWI2NS1hNjAxNTM5OGNlMDEiLCJ1c2VySWQiOiJkMWZkMTFjZC0wYWM2LTQ3NzAtYjU5MS0yNjA3YmZmZDJlOTkiLCJpYXQiOjE2OTA5ODk3MzB9.XZu8rHxg6qt5u3ZAKyvHKbtXieWvMnYAxsPebY7gcYA';

const userData = {
  name: 'adriano',
  email: 'adriano@test.com.br',
};
export const SandBoxPage = () => {
  const layoutContext = useLayoutContext();
  const toggleLayout = () => {
    layoutContext.header ? layoutContext.hideLayout() : layoutContext.showLayout();
  };

  return (
    <>
      {layoutContext.header && <Header />}
      <button onClick={toggleLayout} className="btn">
        toggleLayout
      </button>
      <p>{userData.email}</p>
      <p>{token}</p>
    </>
  );
};
