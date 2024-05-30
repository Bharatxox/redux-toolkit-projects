import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, { payload }) => {
      state.push({
        id: uuidv4(),
        task: payload,
        isCompleted: false,
      });
    },
    removeTodo: (state, { payload }) => {
      return state.filter((todo) => todo.id !== payload);
    },
    markAsCompleted: (state, { payload }) => {
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, markAsCompleted } = todoSlice.actions;

export default todoSlice.reducer;
