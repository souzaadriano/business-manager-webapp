import { UserRepository } from '../../adapters/repositories/user-repository/user-repository.adapter';
import { IUserRepository } from '../../adapters/repositories/user-repository/user-repository.contract';
import { RequestHandlerFactory } from '../handlers/request-handler.factory';

export abstract class UserRepositoryFactory {
  private static _instance: IUserRepository;

  public static instance(): IUserRepository {
    if (UserRepositoryFactory._instance) return UserRepositoryFactory._instance;
    UserRepositoryFactory._instance = new UserRepository({
      requestHandler: RequestHandlerFactory.instance(),
    });

    return UserRepositoryFactory._instance;
  }
}
