import { createSlice } from "@reduxjs/toolkit";

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
      console.log(state.status);
    },
    changeStatus: (state, action) => {
      state.toDos.find();
    },
  },
});

const todosReducer = todosSlice.reducer;

export const { addTodo, changeStatus } = todosSlice.actions;

export default todosReducer;
