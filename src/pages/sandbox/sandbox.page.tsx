const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiJkMWNhOWMyMi1mMmE5LTQ0NDYtYWI2NS1hNjAxNTM5OGNlMDEiLCJ1c2VySWQiOiJkMWZkMTFjZC0wYWM2LTQ3NzAtYjU5MS0yNjA3YmZmZDJlOTkiLCJpYXQiOjE2OTA5ODk3MzB9.XZu8rHxg6qt5u3ZAKyvHKbtXieWvMnYAxsPebY7gcYA';

const userData = {
  name: 'adriano',
  email: 'adriano@test.com.br',
};
export const SandBoxPage = () => {
  return (
    <>
      <p>{userData.email}</p>
      <p>{token}</p>
    </>
  );
};
