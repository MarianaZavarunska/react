import { FC } from "react";

import { Form, GenreList, UserInfo, Logo, ThemeSwitcher } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setModalActive, setOutToken, setYearFilter } from "../../store/slices";
import FormLogIn from "../FormLogIn/FormLogIn";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./Header.css";
import "./Header.responsive.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  // const { isLogedIn } = useAppSelector((state) => state.userReducer);
  const { accessToken } = useAppSelector((state) => state.userReducer);

  return (
    <div
      className="header"
      style={{
        backgroundColor: isSwitched ? "#02286e" : "#05020D",
      }}
    >
      <Logo />

      <ThemeSwitcher />

      <div>
        <button
          className="year-container"
          style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
          onClick={() => dispatch(setYearFilter())}
        >
          The Latest
        </button>
      </div>

      <GenreList />
      <Form />
      <UserInfo />

      <button
        className="sign-btn"
        style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
        onClick={() => {
          accessToken ? dispatch(setOutToken()) : dispatch(setModalActive());
          // if (!isLogedIn) dispatch(setModalActive());
          // if (isLogedIn) dispatch(setLogin());
        }}
      >
        {accessToken ? "Log Out" : "Log In"}
      </button>
      <ModalWindow>
        <FormLogIn />
      </ModalWindow>
    </div>
  );
};

export { Header };
