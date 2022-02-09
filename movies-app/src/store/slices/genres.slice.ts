import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IGenre } from "../../interfaces";
import { genresService } from "../../services";

interface IGenreState {
  genres: IGenre[];
  status: string;
}
const initialState: IGenreState = {
  genres: [],
  status: "",
};

export const getAllGenres = createAsyncThunk(
  "genresSlice/getAllGenres",
  async () => {
    try {
      const { data } = await genresService.getAll();
      return data.genres;
    } catch (err) {
      console.log(err);
    }
  }
);

const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGenres.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getAllGenres.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.genres = action.payload ? action.payload : [];
    });
  },
});

const genresReducer = genresSlice.reducer;

export { genresReducer };
