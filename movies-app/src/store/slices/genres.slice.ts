import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces";
import { genresService } from "../../services";

interface IGenreState {
  genres: IGenre[];
}
const initialState: IGenreState = {
  genres: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
  },
});

const genresReducer = genresSlice.reducer;

export { genresReducer };
