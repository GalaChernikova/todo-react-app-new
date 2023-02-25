import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

let date = new Date();
let currentDate = date.toUTCString();

const names = require("random-names-generator");
const randomName = names.random();

export const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: uuidv4(),
      date: "Fri, 19 Feb 2023 07:50:52 GMT",
      title: "You've made a list, now it's time to check it twice",
      body: "It's easy to lose track of tasks, but there's no better feeling than crossing one off the list! What are your top three priorities on your to-do list right now?",
      comments: [
        { comId: uuidv4(), comName: randomName, comText: "Nice!" },
        {
          comId: uuidv4(),
          comName: randomName,
          comText: "I want to keep track on the things I do",
        },
        {
          comId: uuidv4(),
          comName: randomName,
          comText: "1. keep it simple 2. be persistent 3. remember that it's okay if smth isn't done yet",
        },
        { comId: uuidv4(), comName: randomName, comText: "🔥🔥🔥" },
        {
          comId: uuidv4(),
          comName: randomName,
          comText: "it's so hard for me to make these todo-lists 🤦",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Fri, 20 Feb 2023 09:30:44 GMT",
      title: "Everyone has a never-ending to-do list!",
      body: "From simple tasks like cleaning up the house to complex goals like starting a business, there's always something you can do to improve. What are your top 3 items on your to-do list today?",
      comments: [
        { comId: uuidv4(), comName: randomName, comText: "👍👍👍" },
        {
          comId: uuidv4(),
          comName: randomName,
          comText: "my top 3 are: get up, go to work and make a dinner 😁",
        },
      ],
    },
    {
      id: uuidv4(),
      date: "Fri, 22 Feb 2023 11:03:24 GMT",
      title: "To-do lists have never been more important!",
      body: "Keeping a list of your tasks can help you stay organized and productive throughout the day. Share with us below the one task that you're most looking forward to crossing off your list today!",
      comments: [
        { comId: uuidv4(), comName: randomName, comText: "do some shopping 😋" },
        {
          comId: uuidv4(),
          comName: randomName,
          comText: "make 3 zoom calls and a doctor appointment for tomorrow",
        },
        { comId: uuidv4(), comName: randomName, comText: "🌸🌸🌸" },
      ],
    },
  ],
  reducers: {
    addPost: (state, action) => {
      const post = {
        id: uuidv4(),
        date: currentDate,
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(post);
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload.id);
    },

    addComment: (state, action) => {
      const comment = {
        id: uuidv4(),
        name: randomName,
        text: action.payload.comments.text,
      };
      state.push(comment);
    },
    deleteComment: (state, action) => {
      return state.filter(
        (comment) => comment.id !== action.payload.comments.id
      );
    },
  },
});

export const { addPost, deletePost, addComment, deleteComment } =
  postSlice.actions;

export default postSlice.reducer;
