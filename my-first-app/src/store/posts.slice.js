import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonService from "../services/json.service";

export const getAllPosts = createAsyncThunk(
  "postsSlice/getAllPosts",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await jsonService.getPosts();
      return posts;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    posts: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [getAllPosts.padding]: (state, action) => {
      state.status = "padding";
      state.error = null;
    },
    [getAllPosts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.posts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

const postsReducer = postsSlice.reducer;
export default postsReducer;
