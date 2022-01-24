import axiosService from "./axios.service";

import { urls } from "../configs/urls";

export const picturesService = {
  getDog: () => axiosService.get(urls.dog).then((response) => response.date),
  getCat: () =>
    axiosService
      .get(urls.cat, { maxRedirects: 0 })
      .then((response) => response.date),
  getBoy: () => axiosService.get(urls.boy).then((response) => response.date),
  getNature: () =>
    axiosService.get(urls.nature).then((response) => response.date),
  getNotebook: () =>
    axiosService.get(urls.notebook).then((response) => response.date),
  getHouse: () =>
    axiosService.get(urls.house).then((response) => response.date),
};
