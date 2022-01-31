import { configureStore } from "@reduxjs/toolkit";

import carsReducer from "./cars.slice";
import postsReducer from "./posts.slice";
import usersReducer from "./users.slice";
import commentsReducer from "./comments.slice";

const store = configureStore({
  reducer: {
    carsReducer,
    usersReducer,
    postsReducer,
    commentsReducer,
  },
});

export default store;
