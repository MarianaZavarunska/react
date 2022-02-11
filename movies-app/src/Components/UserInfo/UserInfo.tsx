import { FC } from "react";

import { useAppSelector } from "../../hooks";
import "./UserInfo.css";

const UserInfo: FC = () => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  return (
    <div className={isSwitched ? "user-info-container on": "user-info-container"}>
      <img src={require("../../photos/female-user.png")} alt="user" />
      <div>Mariana</div>
    </div>
  );
};

export { UserInfo };
