import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jsonService from "../services/json.service";

export const getAllUsers = createAsyncThunk(
  "usersSlice/getAllUsers",
  async (_, { dispatch }) => {
    try {
      const users = await jsonService.getUsers();
      dispatch(addUser({ users }));
    } catch (e) {
      console.log(e);
    }
  }
);

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users = [...action.payload.users];
    },
  },

  extraReducers: {},
});

const usersReducer = usersSlice.reducer;

export const { addUser } = usersSlice.actions;

export default usersReducer;
