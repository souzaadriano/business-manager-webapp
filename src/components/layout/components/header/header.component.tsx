import { useLayoutContext } from '../../../../context/layout/layout-context.hook';
import { HomeIcon } from '../../../icons';
import { usePageContext } from '../../context/page-context.hook';

export const Header = () => {
  const layoutContext = useLayoutContext();
  const pageContext = usePageContext();
  const toggleMenu = () => {
    layoutContext.toggleMenu();
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button onClick={toggleMenu} className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className="flex-1 justify-center">
        <a className="btn btn-ghost normal-case text-xl">{pageContext.current}</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost ml-2 mr-2">
          <svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
        <details className="dropdown">
          <summary className="m-1 btn btn-ghost cursor-pointer">Usuario</summary>
          <ul className="p-2 dropdown-content z-[1]">
            <li>
              <a className="btn btn-ghost">
                <HomeIcon />
                <p>logout</p>
              </a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};
