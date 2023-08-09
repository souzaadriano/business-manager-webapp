import { ChangeEvent, useState } from 'react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUserContext } from '../../../../context';

export const LoginForm = () => {
  const userContext = useUserContext();
  const navegation = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    console.log({ email });
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    console.log({ password });
  };
  useResolvedPath('/');
  const handleSignin = async () => {
    await userContext.signin({ email, password });
    navegation('/');
  };

  return (
    <div className="mt-8">
      <form>
        <div>
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
          <input
            onChange={handleEmail}
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label className="text-sm text-gray-600 dark:text-gray-200">Password</label>
            <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <input
            onChange={handlePassword}
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </form>
      <div className="mt-6">
        <button
          onClick={handleSignin}
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};
