import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMovie } from "../../interfaces/movie.interface";
import moviesService from "../../services/movies.service";

interface IMoviesState {
  movies: IMovie[];
  movieName: string | null;
  status: string | null;
  rating: number;
  hover: number;
}
const initialState: IMoviesState = {
  movies: [],
  movieName: null,
  status: null,
  rating: 0,
  hover: 0,
};

export const getAllMovies = createAsyncThunk(
  "moviesSlice/getAllMovies",
  async () => {
    const { data } = await moviesService.getAll();
    return data.results;
  }
);

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovieName: (
      state,
      action: PayloadAction<{ movieName: string | null }>
    ) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload;
    });
  },
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const { setMovieName } = moviesSlice.actions;
