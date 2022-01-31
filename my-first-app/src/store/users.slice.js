import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonService from "../services/json.service";

export const getAllUsers = createAsyncThunk(
  "usersSlice/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const users = await jsonService.getUsers();
      //   dispatch(addUser({ users }));
      return users;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    status: null,
    error: null,
  },
  //   reducers: {
  //     addUser: (state, action) => {
  //       state.users = [...action.payload.users];
  //     },
  //   },

  extraReducers: {
    [getAllUsers.pending]: (state, action) => {
      state.status = "pending";
      state.error = null;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.users = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

const usersReducer = usersSlice.reducer;

export const { addUser } = usersSlice.actions;

export default usersReducer;
