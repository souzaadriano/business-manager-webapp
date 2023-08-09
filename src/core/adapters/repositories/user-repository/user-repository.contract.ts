import { TSigninInput, TSigninOutput } from './dtos/signin.dto';

export interface IUserRepository {
  signin(input: TSigninInput): Promise<TSigninOutput>;
}
