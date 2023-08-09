import { createContext, useState } from 'react';
import { TSigninInput } from '../../core/adapters/repositories/user-repository/dtos/signin.dto';
import { BearerToken } from '../../core/domain/token/bearer-token.class';
import { UserRepositoryFactory } from '../../core/factories';
import { TComponent } from '../../helpers/react.helper';
import { IUser, IUserContext } from './user-context.contract';

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider: TComponent = ({ children }) => {
  const intializer = { email: '', id: '', logged: false, name: '', token: new BearerToken('') };
  const userRepository = UserRepositoryFactory.instance();
  const [user, setUser] = useState<IUser>(intializer);

  const handler: IUserContext = {
    ...user,
    setToken: (token: string) => {
      setUser({ ...user, logged: true, token: BearerToken.create(token) });
    },
    signin: async (input: TSigninInput) => {
      const { email, id, name, token } = await userRepository.signin(input);
      setUser({ email, id, name, token: new BearerToken(token), logged: true });
    },

    signout: async () => {
      setUser(intializer);
    },
  };

  return <UserContext.Provider value={handler}>{children}</UserContext.Provider>;
};
