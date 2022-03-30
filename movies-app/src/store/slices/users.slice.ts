import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IUserLogInResponse } from "../../interfaces";
import { User } from "../../models/User";
import { authService } from "../../services";

interface IUserState {
  user: IUser;
  isModalActive: boolean;
  //   isLogedIn: boolean;
  accessToken: string | undefined;
  refreshToken: string;
}
const initialState: IUserState = {
  user: {
    firstName: "",
    lastName: "",
    age: 18,
    phone: "",
    email: "",
    password: "",
  },
  isModalActive: false,
  //   isLogedIn: false,
  accessToken: undefined,
  refreshToken: "",
};

export const userLogIn = createAsyncThunk<IUserLogInResponse, Partial<IUser>>(
  "usersSlice/userLogIn",
  async (user) => {
    const { data } = await authService.logIn(user);
    console.log("userLogIn", data);
    return data;
  }
);

const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setLogInData: (state, action: PayloadAction<{ data: Partial<IUser> }>) => {
      state.user.email = action.payload.data.email
        ? action.payload.data.email
        : "";
      state.user.password = action.payload.data.password
        ? action.payload.data.password
        : "";
    },

    setModalActive: (state) => {
      state.isModalActive = !state.isModalActive;
    },

    setOutToken: (state) => {
      state.accessToken = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogIn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      console.log("fulfilled", state.accessToken);
    });
  },
});

const userReducer = userSlice.reducer;

export { userReducer };

export const { setLogInData, setModalActive, setOutToken } = userSlice.actions;
