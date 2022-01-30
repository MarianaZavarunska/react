import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: {
    cars: [],
    car: {},
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push({
        id: new Date().getTime(),
        ...action.payload.data,
      });
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
