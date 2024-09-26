export interface User {
  email: string;
  name: string;
  lastname: string;
  country: string;
  isVerified?: boolean;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface BaseResponse {
  [key: string]: string | {};
}
