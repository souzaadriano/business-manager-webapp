import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../global/context";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiJkMWNhOWMyMi1mMmE5LTQ0NDYtYWI2NS1hNjAxNTM5OGNlMDEiLCJ1c2VySWQiOiJkMWZkMTFjZC0wYWM2LTQ3NzAtYjU5MS0yNjA3YmZmZDJlOTkiLCJpYXQiOjE2OTA5ODk3MzB9.XZu8rHxg6qt5u3ZAKyvHKbtXieWvMnYAxsPebY7gcYA";

const userData = {
  name: "adriano",
  email: "adriano@test.com.br",
};
export const SandBoxPage = () => {
  const userContext = useContext(UserContext);

  return (
    <>
      <h1>TEST2E</h1>
      <button onClick={() => userContext?.setUser(userData)}>user</button>
      <br />
      <button onClick={() => userContext?.setToken(token)}>token</button>
      <br />
      <Link to={"/"}>HOME</Link>

      <p>name: {userContext?.user.name}</p>
      <p>email: {userContext?.user.email}</p>
      <p>token: {userContext?.user.token}</p>
    </>
  );
};
