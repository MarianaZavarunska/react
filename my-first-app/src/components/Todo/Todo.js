import React from "react";

const Todo = ({ toDo, dispatch }) => {
  return (
    <div>
      <div style={{ color: toDo.complete ? "grey" : "black" }}>{toDo.name}</div>
      <button onClick={() => dispatch({ type: "complete", id: toDo.id })}>
        Complete
      </button>
      <button onClick={() => dispatch({ type: "delete", id: toDo.id })}>
        Delete
      </button>
    </div>
  );
};

export default Todo;
