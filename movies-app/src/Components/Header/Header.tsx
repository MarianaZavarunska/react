import { FC } from "react";

import { Form, GenreList, UserInfo, Logo, ThemeSwitcher } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setLogin, setYearFilter } from "../../store/slices";
import "./Header.css";
import "./Header.responsive.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isSwitched, isLogin } = useAppSelector(
    (state) => state.moviesReducer
  );

  return (
    <div
      className="header"
      style={{
        backgroundColor: isSwitched ? "#02286e" : "#05020D"
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
        onClick={() => dispatch(setLogin())}
      >
        {isLogin ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export { Header };
