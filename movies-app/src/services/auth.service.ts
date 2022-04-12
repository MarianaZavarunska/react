import { AxiosResponse } from "axios";

import { backURL} from "../constants/backendUrls";
import axiosTepmlate from "../http/axios";
import { IUser, IUserData } from "../interfaces";

class AuthService {
  public async login(
    data: Partial<IUser>
  ): Promise<AxiosResponse<IUserData>> {
    return axiosTepmlate.post<IUserData>(`${backURL.login}`, data);
  }

  public async registartion(
    data: IUser
  ): Promise<AxiosResponse<IUserData>> {
    return axiosTepmlate.post<IUserData>(
      `${backURL.registartion}`, data);
  }

  public async logout(): Promise<string> {
    return axiosTepmlate.post(`${backURL.logout}`);
  }
}

export const authService = new AuthService();
