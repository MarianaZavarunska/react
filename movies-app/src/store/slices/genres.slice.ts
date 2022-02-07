import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces/genre.interface";
import genresService from "../../services/genres.service";

interface IGenreState {
  genres: IGenre[];
  genre: string;
}
const initialState: IGenreState = {
  genres: [],
  genre: "",
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
export default genresReducer;
