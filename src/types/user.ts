export interface User {
  email: string;
  name: string;
  lastname: string;
  country: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}
