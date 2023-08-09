import Axios from 'axios';
import { BearerToken } from '../../../domain/token/bearer-token.class';
import { AbstractHandler } from '../handler.abstract';
import { IRequestHandler, TBaseInput } from './request-handler.contract';

export class RequestHandler extends AbstractHandler<Dependencies> implements IRequestHandler {
  private _headers: Record<string, string | string[]> = {};
  private _token?: BearerToken;

  async get<OUTPUT>(request: TBaseInput<void>): Promise<OUTPUT> {
    const { path, parameters, query } = request;
    const endpoint = this._setPathParameters(path, parameters);
    const { data } = await Axios.get<OUTPUT>(endpoint, this._setOptions(query));

    return data;
  }

  async post<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT> {
    const { path, parameters, query, ...input } = request;
    const endpoint = this._setPathParameters(path, parameters);
    const { data } = await Axios.post<OUTPUT>(endpoint, input, this._setOptions(query));
    console.log(data);
    return data;
  }

  async put<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT> {
    const { path, parameters, query, ...input } = request;
    const endpoint = this._setPathParameters(path, parameters);
    const { data } = await Axios.put<OUTPUT>(endpoint, input, this._setOptions(query));
    return data;
  }

  async patch<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT> {
    const { path, parameters, query, ...input } = request;
    const endpoint = this._setPathParameters(path, parameters);
    const { data } = await Axios.patch<OUTPUT>(endpoint, input, this._setOptions(query));
    return data;
  }

  async delete<OUTPUT>(request: TBaseInput<void>): Promise<OUTPUT> {
    const { path, parameters, query } = request;
    const endpoint = this._setPathParameters(path, parameters);
    const { data } = await Axios.delete<OUTPUT>(endpoint, this._setOptions(query));

    return data;
  }

  setHeaders(input: Record<string, string | string[]>): void {
    this._headers = input;
  }

  setToken(token: BearerToken): void {
    this._token = token;
  }

  private _mountHeaders(): Record<string, string | string[]> {
    if (this._token) return { ...this._headers, authorization: this._token.token };
    return this._headers;
  }

  private _setOptions(query?: Record<string, any>) {
    return { params: query, headers: this._mountHeaders() };
  }

  private _setPathParameters(endpoint: string, parameters?: Record<string, string>) {
    const { url } = this._dependencies;
    if (!parameters) return `${url}/${endpoint}`;
    const path = endpoint.split('/');
    const parsedEndpoint = path
      .map((chunk) => {
        const key = chunk.slice(0);
        if (chunk.startsWith(':', 0)) return parameters[key];
        return chunk;
      })
      .join('/');

    return `${url}${parsedEndpoint}`;
  }
}

type Dependencies = {
  url: string;
};
