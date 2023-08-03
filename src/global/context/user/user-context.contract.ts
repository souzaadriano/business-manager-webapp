export interface IUser {
  token?: string;
  name: string;
  email: string;
}

export interface IUserContext {
  user: IUser;
  setToken: (token: string) => void;
  setUser: (user: TUser) => void;
}

export type TUser = Omit<IUser, "token">;
