import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {id: uuidv4(), title: "study", completed: false },
    {id: uuidv4(), title: "yoga class", completed: false },
    {id: uuidv4(), title: "check email", completed: true },
    {id: uuidv4(), title: "zoom meeting at 2pm", completed: true },
    {id: uuidv4(), title: "shopping", completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
        const todo = {
            id: uuidv4(),
            title: action.payload.title,
            completed: false,
        };
        state.push(todo);
    },
    toggleComplete: (state, action) => {
        const index = state.findIndex((todo) => todo.id === action.payload.id);
        state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
        return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTask, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
