import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IVideo } from "../../interfaces";
import { videoService } from "../../services";

interface IVideoState {
  videos: IVideo[];
}
const initialState: IVideoState = {
  videos: [],
};

export const getAllVideos = createAsyncThunk(
  "videoSlice/getAllVideo",
  async (movieId: number) => {
    const { data } = await videoService.getAll(movieId);
    return data.results;
  }
);

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.videos =
        state.videos.length > 3 ? state.videos.splice(0, 3) : state.videos;
    });
  },
});

const videoReducer = videoSlice.reducer;
export default videoReducer;
