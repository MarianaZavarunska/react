import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMovie, IGenre, IQueryParams } from "../../interfaces";
import { moviesService } from "../../services";
interface IMoviesState {
  movies: IMovie[];
  status: string | null;
  totalPage: number;
  isSwitched: boolean;
  queryParams: IQueryParams;
  rating: number;
  // hover: number;
}
const initialState: IMoviesState = {
  movies: [],
  status: null,
  totalPage: 1,
  isSwitched: false,
  queryParams: {
    movieName: "",
    currentPage: 1,
  },
  rating: 0,
  // hover: 0,
};

export const getAllMovies = createAsyncThunk(
  "moviesSlice/getAllMovies",
  async (arg: IQueryParams) => {
    const { currentPage } = arg;
    const { data } = await moviesService.getAll(currentPage ? currentPage : 1);
    return data;
  }
);
export const getAllMoviesByName = createAsyncThunk(
  "moviesSlice/getAllMoviesByName",
  async (arg: IQueryParams) => {
    const { movieName, currentPage, genreId } = arg;

    const { data } = await moviesService.searchMovieByName(
      movieName,
      currentPage,
      genreId
    );
    return data;
  }
);

export const getAllMoviesByYear = createAsyncThunk(
  "moviesSlice/getAllMoviesByYear",
  async (arg: IQueryParams) => {
    const { currentPage } = arg;
    const { data } = await moviesService.getAllByYear(
      currentPage ? currentPage : 1
    );
    return data;
  }
);

export const getAllMoviesByGenre = createAsyncThunk(
  "moviesSlice/getAllMoviesByGenre",
  async (queryParams: IQueryParams) => {
    const { data } = await moviesService.searchMovieByGenre(
      queryParams.genreId,
      queryParams.currentPage,
      queryParams.movieName
    );
    return data;
  }
);

const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setMovieName: (state, action: PayloadAction<{ movieName: string }>) => {
      state.queryParams = {
        ...state.queryParams,
        movieName: action.payload.movieName,
        currentPage: 1,
      };
    },
    setPage: (state, action: PayloadAction<{ action: number }>) => {
      if (state.queryParams.currentPage === 1 && action.payload.action === -1)
        return;

      if (
        state.queryParams.currentPage &&
        state.queryParams.currentPage >= 1 &&
        state.queryParams.currentPage <= state.totalPage
      ) {
        state.queryParams.currentPage += action.payload.action;
      }
    },
    setYearFilter: (state) => {
      state.queryParams.isNewMovie = !state.queryParams.isNewMovie;
    },
    setGenreId: (state, action: PayloadAction<{ genreId: string }>) => {
      state.queryParams.genreId = +action.payload.genreId;
      state.queryParams.currentPage = 1;
    },
    setGenresName: (
      _, //state
      action: PayloadAction<{
        ids: number[];
        genres: IGenre[];
        genresName: string[];
      }>
    ) => {
      for (const id of action.payload.ids) {
        action.payload.genresName.push(
          action.payload.genres.find((genre) => genre.id === id)?.name ?? ""
        );
      }
    },
    setSwitch: (state) => {
      state.isSwitched = !state.isSwitched;
    },
    clearFilter: (state) => {
      state.queryParams.movieName = "";
      state.queryParams.currentPage = 1;
      state.queryParams.genreId = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.pending, (state, action) => {
      state.status = "Loading";
    });
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload.results;
      state.totalPage = action.payload.total_pages;
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

    builder.addCase(getAllMoviesByGenre.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.movies = action.payload.results;
      state.totalPage = action.payload.total_pages;
    });
  },
});

const moviesReducer = moviesSlice.reducer;

export { moviesReducer };
export const {
  setMovieName,
  setPage,
  setYearFilter,
  setGenreId,
  setGenresName,
  setSwitch,
  clearFilter,
} = moviesSlice.actions;
