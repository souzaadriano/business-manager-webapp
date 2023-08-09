import { useUserContext } from '../../context';
import { Header } from '../login/components/login-box/header.componenet';

const Home = () => {
  const userContext = useUserContext();
  //const navigate = useNavigate();
  //useEffect(() => {
  //  if (userContext.logged !== true) navigate('/login');
  //});

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <br />
      <p>email: {userContext.email}</p>
      <p>name: {userContext.name}</p>
      <p>id: {userContext.id}</p>
      <p>logged: {userContext.logged ? 'true' : 'false'}</p>
    </div>
  );
};

export default Home;
