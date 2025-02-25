export interface UserStore {
  user: User;
  token: string;
}

export interface User {
  id: string;
  name: string;
  image: string;
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
  usuario?: string;
}