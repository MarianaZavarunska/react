import { FC } from "react";

import { useAppDispatch } from "../../hooks";
import { setYearFilter } from "../../store/slices";
import Form from "../Form/Form";
import GenreList from "../GenreList/GenreList";
import "./Header.css";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="header">
      <div className="logo">
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
    </div>
  );
};

export default Header;
