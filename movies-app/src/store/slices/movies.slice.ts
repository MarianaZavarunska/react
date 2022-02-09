import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces/genre.interface";
import { IBackdrops } from "../../interfaces/images.interface";
import { IMovie } from "../../interfaces/movie.interface";
import { IReview } from "../../interfaces/reviews.interface";
import imagesService from "../../services/images.service";
import moviesService from "../../services/movies.service";
import { reviewsService } from "../../services/reviews.service";
interface ISearch {
  movieName?: string;
  currentPage: number;
  genreId?: number;
}

interface IMoviesState {
  movies: IMovie[];
  movieName: string | null;
  status: string | null;
  currentPage: number;
  totalPage: number;
  isNewMovie: boolean;
  images: IBackdrops[];
  reviews: IReview[];
  isSwitched: boolean;
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
  images: [],
  reviews: [],
  isSwitched: false,
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
  async (arg: ISearch) => {
    const { movieName, currentPage } = arg;
    const { data } = await moviesService.searchMovieByName(
      movieName,
      currentPage
    );
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

export const getAllMoviesByGenre = createAsyncThunk(
  "moviesSlice/getAllMoviesByGenre",
  async (arg: ISearch) => {
    const { genreId, currentPage } = arg;
    const { data } = await moviesService.searchMovieByGenre(
      genreId,
      currentPage
    );
    return data;
  }
);

export const getAllImages = createAsyncThunk(
  "moviesSlice/getAllImages",
  async (movieId: number) => {
    const { data } = await imagesService.getAll(movieId);
    return data;
  }
);

export const getAllReviews = createAsyncThunk(
  "moviesSlice/getAllReviews",
  async (movieId: number) => {
    const { data } = await reviewsService.getAll(movieId);
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
    setYearFilter: (state) => {
      state.isNewMovie = !state.isNewMovie;
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
    // builder.addCase(getAllMoviesByName.pending, (state, action) => {
    //   state.status = "pending";
    //   state.currentPage = 1;
    // });
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
    builder.addCase(getAllImages.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.images = action.payload.backdrops;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.reviews = action.payload.results;
    });
  },
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const {
  setMovieName,
  setPage,
  setYearFilter,
  setGenresName,
  setSwitch,
} = moviesSlice.actions;
