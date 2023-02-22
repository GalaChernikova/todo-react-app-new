import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {id: 1, title: "study", completed: false },
    {id: 2, title: "yoga class", completed: false },
    {id: 3, title: "check email", completed: true },
    {id: 4, title: "zoom meeting at 2pm", completed: true },
    {id: 5, title: "shopping", completed: false },
  ],
  reducers: {
    addTask: (state, action) => {
        const todo = {
            id: new Date(),
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
