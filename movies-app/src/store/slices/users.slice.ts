import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser, IUserLogInResponse} from "../../interfaces";
import { authService } from "../../services";

interface IUserState {
  user: IUser | undefined;
  isModalActive: boolean;
  //   isLogedIn: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  status: number | undefined;
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

export const userLogIn = createAsyncThunk<IUserLogInResponse, Partial<IUser>>(
  "usersSlice/userLogIn", 
  async (user) => {
  try {
    const { data } = await authService.login(user);
  
    return data;
  } catch (error) {
    console.log(error);
    return { userData: undefined, status: 401, error: `${error}` }
  }
});

export const userRegistartion = createAsyncThunk<IUserLogInResponse, IUser>("usersSlice/userRegistartion", 
async (user: IUser) => {
  try {
    const { data } = await authService.registartion(user);
  
    return data;
  } catch (error) {
    console.log(error);
    return { userData: undefined, status: 401, error: `${error}` }
  }
});

export const userLogOut = createAsyncThunk ("usersSlice/userLogOut", async () => {
  try {
    const response = await authService.logout();
  
    return response;
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
      state.accessToken = action.payload?.userData?.accessToken;
      state.refreshToken = action.payload?.userData?.refreshToken;
      state.user = action.payload?.userData?.user;
      state.status = action.payload?.status;
    });

    builder.addCase(userRegistartion.fulfilled, (state, action) => {
      state.accessToken = action.payload?.userData?.accessToken;
      state.refreshToken = action.payload?.userData?.refreshToken;
      state.user = action.payload?.userData?.user;
      state.status = action.payload?.status;
    });

    builder.addCase(userLogOut.fulfilled, (state, action) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
    });
  },
});

const userReducer = userSlice.reducer;

export { userReducer };

export const { setLogInData, setModalActive, setOutToken } = userSlice.actions;
