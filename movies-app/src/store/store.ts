import { combineReducers, configureStore } from "@reduxjs/toolkit";

import genresReducer from "./slices/genres.slice";
import moviesReducer from "./slices/movies.slice";
import videoReducer from "./slices/video.slice";

const rootReducer = combineReducers({
  moviesReducer,
  genresReducer,
  videoReducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; // to put into only actions
