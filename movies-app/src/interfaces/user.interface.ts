export interface IUser {
  firstName: string;
  lastName: string;
  age?: number;
  phone: string;
  email: string;
  password: string;
}

export interface IUserLogInResponse {
  userData: IUserData | undefined;
  status: number;
  error: string | undefined;
}

export interface IUserData{
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
