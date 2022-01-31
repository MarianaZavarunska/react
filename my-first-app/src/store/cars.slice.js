import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import carsService from "../services/cars.service";

export const getAllCars = createAsyncThunk(
  "carsSlice/getAllCars",
  async (_, { rejectWithValue }) => {
    try {
      const cars = await carsService.getAllCars();
      return cars;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const createCar = createAsyncThunk(
  "carsSlice/createCar",
  async ({ data }, { dispatch }) => {
    try {
      const newCar = await carsService.createCar(data);
      dispatch(addCar({ data: newCar }));
    } catch (e) {
      console.log(e);
    }
  }
);
export const updateCar2 = createAsyncThunk(
  "carsSlice/updateCar2",
  async ({ data }, { dispatch }) => {
    try {
      const editedCar = await carsService.updateById(data);
      dispatch(addCar({ data: editedCar }));
    } catch (e) {
      console.log(e);
    }
  }
);

const carsSlice = createSlice({
  name: "carsSlice",
  initialState: {
    cars: [],
    car: {},
    error: null,
    status: null,
  },
  reducers: {
    addCar: (state, action) => {
      let index = state.cars.findIndex((item) => item["id"] === state.car.id);

      state.cars[index === -1 ? state.cars.length : index] =
        action.payload.data;
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
  extraReducers: {
    [getAllCars.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getAllCars.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.cars = action.payload;
    },
    [getAllCars.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

const carsReducer = carsSlice.reducer;

export const { addCar, deleteCar, updateCar } = carsSlice.actions;
export default carsReducer;
