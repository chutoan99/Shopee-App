export type IRegisterData = {
  name: string;
  password: string;
  email: string;
};
export type ILoginData = {
  password: string;
  email: string;
};

export interface LoginREsponse {
  err: number;
  msg: string;
  response: {};
  access_token: string | null;
}

export interface RegisterResponse {
  err: number;
  msg: string;
  response: any;
}
