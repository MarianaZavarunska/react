import React, { FC } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch } from "../../hooks";
import { IUser } from "../../interfaces";
import { setLogInData } from "../../store/slices";

const FormLogIn: FC = () => {
  const { register, handleSubmit, reset } = useForm<{
    email: string;
    password: string;
  }>();

  const dispatch = useAppDispatch();

  const onSubmitForm = (data: Partial<IUser>) => {
    dispatch(setLogInData({ data }));

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Login</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input type="text" {...register("password")} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default FormLogIn;
