import axiosService from "./axios.service";

const usersService = {
  getAll: () => axiosService.get("users").then((response) => response.data),
  getUserPosts: (id) =>
    axiosService.get(`users/${id}/posts`).then((response) => response.data),
  getUserById: (id) =>
    axiosService.get(`users/${id}`).then((response) => response.data),
};

export default usersService;
