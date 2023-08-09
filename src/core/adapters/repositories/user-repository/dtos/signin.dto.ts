export type TSigninInput = {
  email: string;
  password: string;
};

export type TSigninOutput = {
  id: string;
  email: string;
  name: string;
  token: string;
};
