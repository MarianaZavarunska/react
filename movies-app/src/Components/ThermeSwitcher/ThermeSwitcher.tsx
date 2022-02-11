import { FC } from "react";
import { Switch } from "antd";

import { useAppDispatch, useAppSelector } from "../../hooks";
import "./ThermeSwitcher.css";
import { setSwitch } from "../../store/slices";

const ThermeSwitcher: FC = () => {
  //   const { isLogin } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Switch onClick={() => dispatch(setSwitch())} />
    </div>
  );
};

export { ThermeSwitcher };
