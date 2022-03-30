import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setModalActive } from "../../store/slices";

import "./ModalWindow.css";

const ModalWindow: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isModalActive } = useAppSelector((state) => state.userReducer);

  return (
    <div
      className={isModalActive ? "modal active" : "modal"}
      onClick={() => dispatch(setModalActive())}
    >
      <div
        className={isModalActive ? "modal-content active" : "modal-content"}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
