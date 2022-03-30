import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../hooks";
import { IUser, IUserLogInResponse } from "../../interfaces";
import { setLogInData, setModalActive, userLogIn } from "../../store/slices";
import "./FormLogIn.css";

const FormLogIn: FC = () => {
  const { register, handleSubmit, reset } = useForm<{
    email: string;
    password: string;
  }>();
  //   const { accessToken } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const onSubmitForm = (data: Partial<IUser>) => {
    dispatch(userLogIn(data))
      .then((response) => {
        console.log("my response", response);

        if (response) dispatch(setModalActive());
      })
      .catch((err: Error) => console.log(err));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)} className="logIn-form">
        <div className="logIn-content">
          <label>Login</label>
          <input type="text" {...register("email")} />
        </div>
        <div className="logIn-content">
          <label>Password</label>
          <input type="text" {...register("password")} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogIn;
