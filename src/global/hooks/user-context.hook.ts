import { useContext } from "react";
import { UserContext } from "../context";

export const useUserContext = () => {
  const userContext = useContext(UserContext);
  if (!userContext) throw new Error();

  return userContext;
};
