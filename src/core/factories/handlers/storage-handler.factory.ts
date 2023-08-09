import { StorageHandler } from '../../adapters/handlers/storage-handler/storage-handler.adapter';
import { IStorageHandler } from '../../adapters/handlers/storage-handler/storage-handler.contract';

export abstract class StorageHandlerFactory {
  private static _instance: IStorageHandler;

  public static instance(): IStorageHandler {
    if (StorageHandlerFactory._instance) return StorageHandlerFactory._instance;
    StorageHandlerFactory._instance = new StorageHandler();
    return StorageHandlerFactory._instance;
  }
}
