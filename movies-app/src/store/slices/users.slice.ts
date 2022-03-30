import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IUserLogInResponse } from "../../interfaces";
import { authService } from "../../services";

interface IUserState {
  user: IUser;
  isModalActive: boolean;
  //   isLogedIn: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  status: number;
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
  status: 200,
};

export const userLogIn = createAsyncThunk<any, Partial<IUser>>(
  "usersSlice/userLogIn",
  async (user) => {
    try {
      const { data, status } = await authService.logIn(user);

      return { data, status };
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    setLogInData: (state, action: PayloadAction<{ data: Partial<IUser> }>) => {
      if (state.user) {
        state.user.email = action.payload.data.email
          ? action.payload.data.email
          : "";
        state.user.password = action.payload.data.password
          ? action.payload.data.password
          : "";
      }
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
      state.accessToken = action.payload.data.accessToken;
      state.refreshToken = action.payload.data.refreshToken;
      state.user = action.payload.data.user;
      state.status = action.payload.status;

      console.log("===================status===================");
      console.log(state.status);
    });
  },
});

const userReducer = userSlice.reducer;

export { userReducer };

export const { setLogInData, setModalActive, setOutToken } = userSlice.actions;
