import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: {
    cars: [],
    car: {},
  },
  reducers: {
    addCar: (state, action) => {
      let carId = action.payload.id ? action.payload.id : new Date().getTime();
      let index = state.cars.findIndex((item) => item.id === carId);

      state.cars[index === -1 ? state.cars.length : index] = {
        id: carId,
        ...action.payload.data,
      };
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter((item) => item.id !== action.payload.id);
    },
    updateCar: (state, action) => {
      state.car = { ...action.payload.car };
    },
  },
});

const carsReducer = carsSlice.reducer;

export const { addCar, deleteCar, updateCar } = carsSlice.actions;

export default carsReducer;
