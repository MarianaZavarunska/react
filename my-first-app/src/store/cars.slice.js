import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: {
    cars: [
      { model: "Honda", price: "10000", year: "2000", id: 1643539069536 },
      { model: "BMW", price: "10000", year: "2100", id: 1643339069536 },
    ],
    car: {},
  },
  reducers: {
    addCar: (state, action) => {
      let carId = action.payload.id ? action.payload.id : new Date().getTime();
      let index = state.cars.findIndex((item) => item["id"] === carId);

      state.cars[index === -1 ? state.cars.length : index] = {
        id: carId,
        ...action.payload.data,
      };
      state.car = {};
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload.id);
    },
    updateCar: (state, action) => {
      state.car = {
        ...action.payload.car,
      };
    },
  },
});

const carsReducer = carsSlice.reducer;

export const { addCar, deleteCar, updateCar } = carsSlice.actions;
export default carsReducer;
