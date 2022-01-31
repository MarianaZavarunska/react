import { jsonUrls } from "../config/json.url";
import axiosJsonService from "./axios.json.service";

const jsonService = {
  getUsers: () =>
    axiosJsonService.get(jsonUrls.users).then((response) => response.data),
  getPosts: () =>
    axiosJsonService.get(jsonUrls.posts).then((response) => response.data),
  getComments: () =>
    axiosJsonService.get(jsonUrls.comments).then((response) => response.data),
};

export default jsonService;
