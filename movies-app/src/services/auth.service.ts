import { AxiosResponse } from "axios";

import { backURL} from "../constants/backendUrls";
import axiosTepmlate from "../http/axios";
import { IUser, IUserLogInResponse } from "../interfaces";

class AuthService {
  public async login(
    data: Partial<IUser>
  ): Promise<AxiosResponse<IUserLogInResponse>> {
    return axiosTepmlate.post<IUserLogInResponse>(`${backURL.login}`, data);
  }

  public async registartion(
    data: IUser
  ): Promise<AxiosResponse<IUserLogInResponse>> {
    return axiosTepmlate.post<IUserLogInResponse>(
      `${backURL.registartion}`,
      data
    );
  }

  public async logout(): Promise<string> {
    return axiosTepmlate.post(`${backURL.logout}`);
  }
}

export const authService = new AuthService();
