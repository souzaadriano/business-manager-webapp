import { FC, ReactNode } from 'react';
export type TComponent<T = object> = FC<T & { children?: ReactNode }>;
export type THandlerFactory<INPUT = void, OUTPUT = void> = (parameters: INPUT) => () => OUTPUT | Promise<OUTPUT>;
