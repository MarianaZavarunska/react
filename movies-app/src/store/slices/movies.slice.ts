import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMovie } from "../../interfaces/movie.interface";
import moviesService from "../../services/movies.service";

interface IMoviesState {
  movies: IMovie[];
  movieName: string | null;
  status: string | null;
  currentPage: number;
  totalPage: number;
  isNewMovie: boolean;
  // rating: number;
  // hover: number;
}
const initialState: IMoviesState = {
  movies: [],
  movieName: null,
  status: null,
  currentPage: 1,
  totalPage: 1,
  isNewMovie: false,
  // rating: 0,
  // hover: 0,
};

export const getAllMovies = createAsyncThunk(
  "moviesSlice/getAllMovies",
  async (currentPage: number) => {
    const { data } = await moviesService.getAll(currentPage);
    return data;
  }
);
export const getAllMoviesByName = createAsyncThunk(
  "moviesSlice/getAllMoviesByName",
  async (movieName: string) => {
    const { data } = await moviesService.searchMovieByName(movieName);
    return data;
  }
);

export const getAllMoviesByYear = createAsyncThunk(
  "moviesSlice/getAllMoviesByYear",
  async (currentPage: number) => {
    const { data } = await moviesService.getAllByYear(currentPage);
    return data;
  }
);

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovieName: (
      state,
      action: PayloadAction<{ movieName: string | null }>
    ) => {
      state.movieName = action.payload.movieName;
    },
    setPage: (state, action: PayloadAction<{ action: number }>) => {
      if (state.currentPage === 1 && action.payload.action === -1) return;

      if (state.currentPage >= 1 && state.currentPage <= state.totalPage) {
        state.currentPage += action.payload.action;
      }
    },
    setYearFilter: (state, action: PayloadAction<{ foo: string }>) => {
      state.isNewMovie = !state.isNewMovie;
      console.log(state.isNewMovie);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload.results;
      state.totalPage = action.payload.total_pages;
    });
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getAllMoviesByName.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload.results;
      state.totalPage = action.payload.total_pages;
    });
    builder.addCase(getAllMoviesByYear.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload.results;
      state.totalPage = action.payload.total_pages;
    });
  },
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const { setMovieName, setPage, setYearFilter } = moviesSlice.actions;
