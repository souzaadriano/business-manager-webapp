import { IRequestHandler } from '../../handlers/request-handler/request-handler.contract';
import { AbstractRepository } from '../repository.abstract';
import { TSigninInput, TSigninOutput } from './dtos/signin.dto';
import { IUserRepository } from './user-repository.contract';

export class UserRepository extends AbstractRepository<Dependencies> implements IUserRepository {
  async signin(input: TSigninInput): Promise<TSigninOutput> {
    const { requestHandler } = this._dependencies;
    const output = await requestHandler.post<TSigninInput, TSigninOutput>({
      path: 'user/signin',
      ...input,
    });

    return output;
  }
}

type Dependencies = {
  requestHandler: IRequestHandler;
};
