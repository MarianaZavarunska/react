import axios from "axios";

import { backURL, mainBackURL } from "../constants/backendUrls";
import { IUser, IUserLogInResponse } from "../interfaces";

const authService = {
  logIn: (data: Partial<IUser>) =>
    axios.post(`${mainBackURL}${backURL.login}`, data),
};

export { authService };
