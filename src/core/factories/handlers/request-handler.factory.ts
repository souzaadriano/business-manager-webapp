import { RequestHandler } from '../../adapters/handlers/request-handler/request-handler.adapter';
import { IRequestHandler } from '../../adapters/handlers/request-handler/request-handler.contract';

export abstract class RequestHandlerFactory {
  private static _instance: IRequestHandler;

  public static instance(): IRequestHandler {
    if (RequestHandlerFactory._instance) return RequestHandlerFactory._instance;
    RequestHandlerFactory._instance = new RequestHandler({
      url: 'http://localhost:9091',
    });

    return RequestHandlerFactory._instance;
  }
}
