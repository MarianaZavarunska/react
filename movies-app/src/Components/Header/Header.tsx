import { FC } from "react";

import { Form, GenreList } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSwitch, setYearFilter } from "../../store/slices";
import "./Header.css";
import "./Header.responsive.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  return (
    <div
      className="header"
      style={{
        backgroundColor: isSwitched ? "#02286e" : "#05020D",
        height: isSwitched ? "80px" : "inherit",
      }}
    >
      <div className="logo" style={{ display: isSwitched ? "none" : "block" }}>
        <img src={require("../../photos/logo.png")} alt="logo" />
      </div>
      <div>
        <button
          className="year-container"
          onClick={() => dispatch(setYearFilter())}
        >
          The Latest
        </button>
      </div>
      <GenreList />
      <Form />
      <div
        className="sign-btn"
        style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
      >
        Sign In
      </div>
      <button
        onClick={() => dispatch(setSwitch())}
        className="switch-btn"
        style={{ backgroundColor: isSwitched ? "#05020D" : "#02286e" }}
      >
        Switch Theme
      </button>
    </div>
  );
};

export { Header };
