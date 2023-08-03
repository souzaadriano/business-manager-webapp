import { FC, ReactNode } from "react";
export type TComponent<T = object> = FC<T & { children: ReactNode }>;
