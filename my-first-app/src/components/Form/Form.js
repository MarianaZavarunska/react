import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todos.slice";

const Form = () => {
  const todoInput = useRef();
  const dispatch = useDispatch();
  const { toDos, counter } = useSelector((state) => state["todosReducer"]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(todoInput.current.value);
    dispatch(addTodo({ data: todoInput.current.value }));
    e.target.reset();
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={onSubmitForm}>
        <div style={{ fontSize: "1.2rem" }}>All: {toDos.length}</div>
        <div style={{ fontSize: "1.2rem" }}>Completed: {counter}</div>
        <input
          type="text"
          placeholder="todo"
          ref={todoInput}
          style={{ fontSize: "1.2rem" }}
        />
        <button style={{ fontSize: "1.2rem" }}>Add</button>
      </form>
    </div>
  );
};

export default Form;
