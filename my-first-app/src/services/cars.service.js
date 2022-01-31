import { carUrls } from "../config/car.url";
import axiosService from "./axios.service";

const carsService = {
  getAllCars: () =>
    axiosService.get(carUrls.cars).then((response) => response.data),
  createCar: (car) =>
    axiosService.post(carUrls.cars, car).then((response) => response.data),
  updateById: (id, car) =>
    axiosService
      .patch(`${carUrls.cars}/${id}`, car)
      .then((response) => response.data),
  deleteById: (id) => axiosService.delete(`${carUrls.cars}/${id}`),
};

export default carsService;
