import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars.slice";

const store = configureStore({
  reducer: {
    carsReducer,
  },
});

export default store;
