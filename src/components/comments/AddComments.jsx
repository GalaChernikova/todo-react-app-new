import { useDispatch } from "react-redux";
import { useState } from "react";
import { addComment } from "../../redux/postSlice";

export default function AddComments() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const onSubmitComment = (event) => {
    event.preventDefault();
    if (comment) {
      dispatch(
        addComment({
            comText: comment,
        })
      );
    }
  };
  return (
    <div className="flex flex-col font-main text-stone-600">
      <form
        onSubmit={onSubmitComment}
        className="my-3 max-w-md w-full lg:max-w-lg"
      >
        <input
          type="text"
          className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border bg-transparent sm:text-sm"
          placeholder="Add comment..."
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></input>

        <button
          type="submit"
          className="text-lg bg-stone-600 rounded-xl text-white-bg drop-shadow-xl py-2 px-5 w-40 hover:bg-stone-800 sm:text-sm"
        >
          Add comment
        </button>
      </form>
    </div>
  );
}
