import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IBackdrops } from "../../interfaces";
import { imagesService } from "../../services";

interface ImagesState {
  images: IBackdrops[];
  status:string;
}
const initialState: ImagesState = {
  images: [],
  status: '',
};

export const getAllImages = createAsyncThunk(
  "imagesSlice /getAllImages",
  async (movieId: number) => {
    const { data } = await imagesService.getAll(movieId);
    return data;
  }
);

const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState,
  reducers: {},
  extraReducers:(builder) =>
  builder.addCase(getAllImages.fulfilled, (state, action) => {
    state.status = "fulfilled";
    state.images = action.payload.backdrops;
  })
});

const imagesReducer = imagesSlice.reducer;

export {imagesReducer};