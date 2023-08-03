import { createContext, useState } from "react";
import { IUserContext, TUser } from "./user-context.contract";
import { TComponent } from "../../../helpers/react.helper";

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider: TComponent = ({ children }) => {
  const [userInfo, setUser] = useState<TUser>({ email: "", name: "" });
  const [token, setToken] = useState<string | undefined>(undefined);
  const user = { email: userInfo.email, name: userInfo.name, token };

  return (
    <UserContext.Provider value={{ setToken, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
};
