export interface IUser {
  firstName: string;
  lastName: string;
  age?: number;
  phone: string;
  email: string;
  password: string;
}

// export interface IUserFull{

// }
export interface IUserLogInResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
