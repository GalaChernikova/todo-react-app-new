import { useState } from "react";
import { addPost } from "../../redux/postSlice";
import { useDispatch } from "react-redux";

export default function AddPost() {
  const [newTitle, setNewTitle] = useState("");
  const [newPost, setNewPost] = useState("");

  const dispatch = useDispatch();

  const onSubmitPost = (event) => {
    event.preventDefault();
    if (newTitle && newPost) {
      dispatch(
        addPost({
          title: newTitle,
          body: newPost,
        })
      );
    }
  };

  return (
    <div className="p-4 rounded-xl bg-white-bg drop-shadow-md w-full font-main">
      <h2 className="font-title mb-5 text-2xl text-stone-600">Add post</h2>

      <form action="" onSubmit={onSubmitPost} className="flex flex-col ">
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => setNewTitle(event.target.value)}
          className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border bg-transparent sm:text-sm"
        />
        <textarea
          type="text"
          placeholder="Add post.."
          onChange={(event) => setNewPost(event.target.value)}
          className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border bg-transparent sm:text-sm"
        />

        <button
          type="submit"
          className="text-lg bg-stone-600 rounded-xl text-white-bg drop-shadow-xl py-2 px-5 w-40 hover:bg-stone-800 sm:text-sm"
        >
          Add post
        </button>
      </form>
    </div>
  );
}
