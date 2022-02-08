import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "../../hooks";
import { setMovieName } from "../../store/slices";
import "./Form.css";

const Form: FC = () => {
  const { register, handleSubmit, reset } = useForm<{ movieName: string }>();
  // let { currentPage } = useAppSelector((state) => state.moviesReducer);

  const dispatch = useAppDispatch();

  const onSubmitForm: SubmitHandler<{ movieName: string }> = (movieName) => {
    dispatch(setMovieName(movieName));
    // currentPage = 1;
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <input type="text" placeholder="search" {...register("movieName")} />
        <button className="btn-search">Search</button>
      </form>
    </>
  );
};

export default Form;
