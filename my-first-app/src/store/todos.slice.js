import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const initialState = {
  toDos: [],
  counter: 0,
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.toDos.push({
        id: new Date().getTime(),
        name: action.payload.data,
        status: false,
      });
    },
    changeStatus: (state, action) => {
      const index = state.toDos.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(index);

      state.toDos[index].status === false
        ? (state.toDos[index].status = true)
        : (state.toDos[index].status = false);

      state.toDos[index].status === false ? state.counter-- : state.counter++;
      // console.log(state.toDos[index].status);
    },
    deleteTodo: (state, action) => {
      let index = state.toDos.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.toDos[index].status === true) {
        state.counter--;
      }

      state.toDos.splice(index, 1);
    },
  },
});

const todosReducer = todosSlice.reducer;

export const { addTodo, changeStatus, deleteTodo } = todosSlice.actions;

export default todosReducer;
