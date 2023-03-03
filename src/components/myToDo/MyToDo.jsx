import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../../redux/todoSlice";

export default function MyToDo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(
        addTask({
          title: value,
        })
      );
    }
  };

  return (
    <div className="flex flex-col font-main text-stone-600">
      <form onSubmit={onSubmit} className="my-3 max-w-md w-full lg:max-w-lg">
        <input
          type="text"
          className="rounded-xl px-5 py-2 text-lg mb-3 w-full border-stone-600 border bg-transparent sm:text-sm"
          placeholder="Add todo..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>

        <button
          type="submit"
          className="text-lg bg-stone-600 rounded-xl text-white-bg drop-shadow-xl py-2 px-5 w-40 hover:bg-stone-800 sm:text-sm"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
