import axiosService from "./axios.service";

import { urls } from "../configs/urls";

export const picturesService = {
  getDog: () =>
    axiosService
      .get(urls.dog, { responseType: "blob" })
      .then((response) => response.data),
  getCat: () =>
    axiosService
      .get(urls.cat, { responseType: "blob" })
      .then((response) => response.data),
  getBoy: () =>
    axiosService
      .get(urls.boy, { responseType: "blob" })
      .then((response) => response.data),
  getNature: () =>
    axiosService
      .get(urls.nature, { responseType: "blob" })
      .then((response) => response.data),
  getNotebook: () =>
    axiosService
      .get(urls.notebook, { responseType: "blob" })
      .then((response) => response.data),
  getHouse: () =>
    axiosService
      .get(urls.house, { responseType: "blob" })
      .then((response) => response.data),
};
