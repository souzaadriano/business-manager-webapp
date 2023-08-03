import React, { useContext } from "react";
import { UserContext } from "../../global/context";

const Home = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <p>name: {userContext?.user.name}</p>
      <p>email: {userContext?.user.email}</p>
      <p>token: {userContext?.user.token}</p>
    </div>
  );
};

export default Home;
