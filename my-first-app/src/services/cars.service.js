import { urls } from "../config/urls";
import axiosService from "./axios.service";

const carsService = {
  getAllCars: () =>
    axiosService.get(urls.cars).then((response) => response.data),
  createCar: (car) =>
    axiosService.post(urls.cars, car).then((response) => response.data),
  updateById: (id, car) =>
    axiosService
      .patch(`${urls.cars}/${id}`, car)
      .then((response) => response.data),
  deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
};

export default carsService;
