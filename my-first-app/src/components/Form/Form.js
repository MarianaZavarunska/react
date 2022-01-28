import React, { useReducer, useState } from "react";
import Todo from "../Todo/Todo";

const Form = () => {
  const reducer = (todos, action) => {
    switch (action.type) {
      case "add": {
        return [...todos, addNewToDo(action.payload.toDo)];
      }
      case "delete": {
        return [...todos.filter((todo) => todo.id !== action.id)];
      }
      case "complete": {
        return todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      }
      default:
        return todos;
    }
  };

  const addNewToDo = (toDo) => {
    return { id: Date.now(), name: toDo, complete: false };
  };

  const [toDo, setToDo] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", payload: { toDo } });
    setToDo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        ></input>
        <button>Add</button>
      </form>
      {todos &&
        todos.map((toDo) => (
          <Todo key={toDo.id} toDo={toDo} dispatch={dispatch} />
        ))}
    </div>
  );
};

export default Form;
