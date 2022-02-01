import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../store/todos.slice";

const Todo = ({ todo: { id, name }, status }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "200px",
          width: "100%",
        }}
      >
        <label>
          <input
            type="checkbox"
            onChange={() => dispatch(changeStatus({ id }))}
          />
          {name}----
          {status}
        </label>

        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
