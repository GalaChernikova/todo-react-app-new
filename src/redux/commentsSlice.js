import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const names = require("random-names-generator");
const randomName = names.random();

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [
    { id: uuidv4(), name: randomName, text: "Nice!" },
    {
      id: uuidv4(),
      name: randomName,
      text: "I want to keep track on the things I do",
    },
    {
      id: uuidv4(),
      name: randomName,
      text: "1. keep it simple 2. be persistent 3. remember that it's okay if smth isn't done yet",
    },
    { id: uuidv4(), name: randomName, text: "🔥🔥🔥" },
    {
      id: uuidv4(),
      name: randomName,
      text: "it's so hard for me to make these todo-lists 🤦",
    },
  ],
  reducers: {
    addComment: (state, action) => {
      const comment = {
        id: uuidv4(),
        name: randomName,
        text: action.payload.text,
      };
      state.push(comment);
    },
    deleteComment: (state, action) => {
      return state.filter((comment) => comment.id !== action.payload.id);
    },
  },
});

export const { addComment, deleteComment } = commentsSlice.actions;

export default commentsSlice.reducer;
