import { TSigninInput } from '../../core/adapters/repositories/user-repository/dtos/signin.dto';
import { BearerToken } from '../../core/domain/token/bearer-token.class';

export interface IUser {
  logged: boolean;
  id: string;
  name: string;
  email: string;
  token: BearerToken;
}

export interface IUserContext extends IUser {
  setToken(token: string): void;
  signin(input: TSigninInput): Promise<void>;
  signout(): Promise<void>;
}
