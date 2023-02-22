import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: "",
    completed: false,
  },
  reducers: {
    addTask: {},
    completeTask: {},
    removeTask: {},
  },
});

export const {addTask, completeTask, removeTask} = todoSlice.actions;

export const todoSlice.reducer;