import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces/genre.interface";
import genresService from "../../services/genres.service";

interface IGenreState {
  genres: IGenre[];
  genreId: number;
}
const initialState: IGenreState = {
  genres: [],
  genreId: 0,
};

export const getAllGenres = createAsyncThunk(
  "genresSlice/getAllGenres",
  async () => {
    const { data } = await genresService.getAll();
    return data.genres;
  }
);

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    setGenreName: (state, action: PayloadAction<{ genreId: string }>) => {
      state.genreId = +action.payload.genreId;
      console.log(state.genreId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

const genresReducer = genresSlice.reducer;

export const { setGenreName } = genresSlice.actions;
export default genresReducer;
