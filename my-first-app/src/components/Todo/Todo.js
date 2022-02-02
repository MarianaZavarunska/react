import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "../../store/todos.slice";

const Todo = ({ todo: { id, name, status } }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "200px",
          width: "100%",
          margin: "20px",
        }}
      >
        <label style={{ fontSize: "1.2rem" }}>
          <input
            type="checkbox"
            onChange={() => dispatch(changeStatus({ id }))}
          />
          <span
            style={{
              textDecoration: status === true ? "line-through" : "none",
              color: status === true ? "grey" : "black",
            }}
          >
            {name}
          </span>
        </label>

        <button
          style={{ fontSize: "1.2rem" }}
          onClick={() => dispatch(deleteTodo({ id }))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
