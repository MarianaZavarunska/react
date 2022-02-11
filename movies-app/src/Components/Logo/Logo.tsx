import { FC } from "react";

import { useAppSelector } from "../../hooks";

const Logo: FC = () => {
  const { isSwitched } = useAppSelector((state) => state.moviesReducer);

  return (
    <div className="logo" style={{ display: isSwitched ? "none" : "block" }}>
      <img src={require("../../photos/logo.png")} alt="logo" />
    </div>
  );
};

export { Logo };
