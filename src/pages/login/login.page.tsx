import { Description, LoginBox } from "./components";
import "./login.css";

const Login = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <Description />
        <LoginBox />
      </div>
    </div>
  );
};

export default Login;
