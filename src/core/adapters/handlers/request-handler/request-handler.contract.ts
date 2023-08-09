export interface IRequestHandler {
  get<OUTPUT>(request: TBaseInput<void>): Promise<OUTPUT>;
  post<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT>;
  put<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT>;
  patch<INPUT, OUTPUT>(request: TBaseInput<INPUT>): Promise<OUTPUT>;
  delete<OUTPUT>(request: TBaseInput<void>): Promise<OUTPUT>;
  setHeaders(input: Record<string, string | string[]>): void;
}

export type TBaseInput<INPUT> = INPUT & {
  path: string;
  query?: Record<string, any>;
  parameters?: Record<string, string>;
};
