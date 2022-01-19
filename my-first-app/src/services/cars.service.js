import { urls } from "../configs/urls";
import axiosService from "./axios.service";

const carsService = {
  create: (car) =>
    axiosService.post(urls.cars, car).then((response) => response.data),
  getAll: () => axiosService.get(urls.cars).then((response) => response.data),
  getById: (id) => axiosService.get(`${urls.cars}/${id}`),
  updateById: (id, car) =>
    axiosService
      .patch(`${urls.cars}/${id}`, car)
      .then((response) => response.data),
  delete: (id) => axiosService.delete(`${urls.cars}/${id}`),
};

export default carsService;
