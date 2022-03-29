import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "../../interfaces";
import { User } from "../../models/User";

interface IUserState {
  user: IUser;
  isModalActive: boolean;
}
const initialState: IUserState = {
  //   user: { firstName: "", lastName: "", phone: "", email: "", password: "" },
  user: new User(),
  isModalActive: true,
};

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
  },
});

const userReducer = userSlice.reducer;

export { userReducer };

export const { setLogInData } = userSlice.actions;
