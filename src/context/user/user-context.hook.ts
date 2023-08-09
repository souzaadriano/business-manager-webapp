import { useContext } from 'react';
import { IUserContext } from '.';
import { UserContext } from './user-provider.context';

export const useUserContext = (): IUserContext => {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error('user-context not found');

  return userContext;
};
