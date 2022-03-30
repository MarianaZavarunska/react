import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IUserLogInResponse } from "../../interfaces";
import { authService } from "../../services";

interface IUserState {
  user: IUser | undefined;
  isModalActive: boolean;
  //   isLogedIn: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
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

export const userLogIn = createAsyncThunk<
  IUserLogInResponse | undefined,
  Partial<IUser>
>("usersSlice/userLogIn", async (user) => {
  try {
    const { data } = await authService.logIn(user);
    console.log("userLogIn", data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

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
      state.accessToken = action.payload?.accessToken;
      state.refreshToken = action.payload?.refreshToken;
      state.user = action.payload?.user;
      console.log("fulfilled", state.accessToken);
    });
  },
});

const userReducer = userSlice.reducer;

export { userReducer };

export const { setLogInData, setModalActive, setOutToken } = userSlice.actions;
