import { LoginForm } from "./login-form.componenet";
import { Footer } from "./footer.componenet";
import { Header } from "./header.componenet";

export const LoginBox = () => {
  return (
    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
      <div className="flex-1">
        <Header />
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
};
