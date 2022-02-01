import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/todos.slice";

const Form = () => {
  const todoInput = useRef();
  const dispatch = useDispatch();
  const { toDos } = useSelector((state) => state["todosReducer"]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    // console.log(todoInput.current.value);
    dispatch(addTodo({ data: todoInput.current.value }));
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <div>Counter: {toDos.length}</div>
        <input type="text" placeholder="todo" ref={todoInput} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Form;
