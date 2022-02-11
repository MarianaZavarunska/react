import { FC } from "react";

import { useAppSelector } from "../../hooks";
import "./Logo.css";

const Logo: FC = () => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  return (
    <div className="logo">
      <img
        src={require("../../images/logo.png")}
        alt="logo"
        style={{ display: isSwitched ? "none" : "block" }}
      />
    </div>
  );
};

export { Logo };
