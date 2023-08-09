import { FC, ReactNode } from 'react';
export type TContextComponent<T = object> = FC<T & { children: ReactNode }>;
