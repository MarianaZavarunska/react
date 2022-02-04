import axios, { AxiosResponse } from "axios";
import { IUser
 } from "./interfaces/user.interface";
export const userService = {
   getAll: ():Promise<AxiosResponse<IUser[]>> => axios.get('https://jsonplaceholder.typicode.com/users')
}