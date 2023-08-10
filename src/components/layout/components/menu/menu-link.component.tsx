import { useNavigate } from 'react-router-dom';
import { TComponent } from '../../../../helpers/react.helper';
import { usePageContext } from '../../context/page-context.hook';

export const MenuLink: TComponent<TMenuLinkProps> = ({ children, path, label }) => {
  const navigate = useNavigate();
  const pageContext = usePageContext();

  const linkHandler = () => {
    pageContext.setPage(label);
    navigate({ pathname: path });
  };

  return (
    <li>
      <a onClick={linkHandler}>
        {children}
        {label}
      </a>
    </li>
  );
};

export type TMenuLinkProps = {
  path: string;
  label: string;
};
