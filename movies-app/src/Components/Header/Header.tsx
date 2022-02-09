import { FC } from "react";

import { Form, GenreList } from "..";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setSwitch, setYearFilter } from "../../store/slices";
import "./Header.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);
  return (
    <div
      className="header"
      style={{ backgroundColor: isSwitched ? "darkblue" : "#05020D" }}
    >
      <div className="logo" style={{ display: isSwitched ? "none" : "block" }}>
        <img src={require("./logo_preview_rev_2.jpeg")} alt="logo" />
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
      <div className="sign-btn">Sign In</div>
      <button onClick={() => dispatch(setSwitch())} className="switch-btn">
        Switch Theme
      </button>
    </div>
  );
};

export { Header };
