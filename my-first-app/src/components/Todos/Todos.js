import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

const Todos = () => {
  const { toDos } = useSelector((state) => state["todosReducer"]);
  return (
    <div>
      {toDos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;
