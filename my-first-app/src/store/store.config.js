import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./cars.slice";
import usersReducer from "./users.slice";

const store = configureStore({
  reducer: {
    carsReducer,
    usersReducer,
  },
});

export default store;
