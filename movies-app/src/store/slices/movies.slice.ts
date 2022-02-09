import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IMovie, IGenre, IReview, IQueryParams } from "../../interfaces";
import { imagesService, moviesService, reviewsService } from "../../services";
interface IMoviesState {
  movies: IMovie[];
  // movieName: string | null;
  status: string | null;
  // currentPage: number;
  totalPage: number;
  // isNewMovie: boolean;
  // images: IBackdrops[];
  reviews: IReview[];
  isSwitched: boolean;
  queryParams: IQueryParams;
  // rating: number;
  // hover: number;
}
const initialState: IMoviesState = {
  movies: [],
  status: null,
  // currentPage: 1,
  totalPage: 1,
  // isNewMovie: false,
  // images: [],
  reviews: [],
  isSwitched: false,
  queryParams: {
    movieName: "",
    currentPage: 1,
  },
  // rating: 0,
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
      queryParams.currentPage
    );
    return data;
  }
);

// export const getAllImages = createAsyncThunk(
//   "moviesSlice/getAllImages",
//   async (movieId: number) => {
//     const { data } = await imagesService.getAll(movieId);
//     return data;
//   }
// );

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
    // builder.addCase(getAllImages.fulfilled, (state, action) => {
    //   state.status = "fulfilled";
    //   state.images = action.payload.backdrops;
    // });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.reviews = action.payload.results;
    });
  },
});

const moviesReducer = moviesSlice.reducer;

export {moviesReducer};
export const {
  setMovieName,
  setPage,
  setYearFilter,
  setGenreId,
  setGenresName,
  setSwitch,
} = moviesSlice.actions;
