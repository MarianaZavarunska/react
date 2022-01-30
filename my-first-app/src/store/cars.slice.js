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
      // if(action.payload.data.id)
      state.cars.push({
        ...action.payload.data,
        id: action.payload.data["id"] ? state.car.id : new Date().getTime(),
      });
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
