import { FC } from "react";
import { Switch } from "antd";

import { useAppDispatch, useAppSelector } from "../../hooks";
import "./ThemeSwitcher.css";
import { setSwitch } from "../../store/slices";

const ThemeSwitcher: FC = () => {
  //   const { isLogin } = useAppSelector((state) => state.moviesReducer);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Switch onClick={() => dispatch(setSwitch())} />
    </div>
  );
};

export { ThemeSwitcher };
