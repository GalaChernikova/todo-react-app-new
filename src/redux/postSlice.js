import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

let date = new Date();
let currentDate = date.toUTCString()
console.log(currentDate)

export const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      id: uuidv4(),
      date: "Fri, 19 Feb 2023 07:50:52 GMT",
      title: "You've made a list, now it's time to check it twice",
      body: "It's easy to lose track of tasks, but there's no better feeling than crossing one off the list! What are your top three priorities on your to-do list right now?",
      reactions: 0,
    },
    {
      id: uuidv4(),
      date: "Fri, 20 Feb 2023 09:30:44 GMT",
      title: "Everyone has a never-ending to-do list!",
      body: "From simple tasks like cleaning up the house to complex goals like starting a business, there's always something you can do to improve. What are your top 3 items on your to-do list today?",
      reactions: 0,
    },
    {
      id: uuidv4(),
      date: "Fri, 22 Feb 2023 11:03:24 GMT",
      title: "To-do lists have never been more important!",
      body: "Keeping a list of your tasks can help you stay organized and productive throughout the day. Share with us below the one task that you're most looking forward to crossing off your list today!",
      reactions: 0,
    },
  ],
  reducers: {
    addPost: (state, action) => {
        const post = {
            id: uuidv4(),
            date: currentDate,
            title: action.payload.title,
            body: action.payload.body,
        }
        state.push(post);
    },
    addReaction: state => {
        state.reactions += 1
    },
    deletePost: (state, action) => {
        return state.filter((post) => post.id !== action.payload.id);
    }
  }
});

export const { addPost, addReaction, deletePost } = postSlice.actions;

export default postSlice.reducer;