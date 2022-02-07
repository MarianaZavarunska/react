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
        <img src={require("./logo-movie_preview_rev_1.jpeg")} alt="logo" />
      </div>
      <div>
        <button
          style={{ color: "#fff" }}
          onClick={() => dispatch(setYearFilter({ foo: "yes" }))}
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
