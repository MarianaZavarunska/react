import { FC } from "react";

import { useAppSelector } from "../../hooks";
import "./UserInfo.css";

const UserInfo: FC = () => {
  const { isSwitched, isLogin } = useAppSelector(
    (state) => state.moviesReducer
  );

  return (
    <div
      className={isSwitched ? "user-info-container on" : "user-info-container"}
    >
      <img
        src={require("../../images/female-user.png")}
        alt="user"
        style={{ display: isLogin ? "block" : "none" }}
      />
      <div style={{ display: isLogin ? "block" : "none" }}>Mariana</div>
    </div>
  );
};

export { UserInfo };
