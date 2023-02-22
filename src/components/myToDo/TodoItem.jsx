import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./../../redux/todoSlice";
import { FiX } from "react-icons/fi";

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="flex justify-between">
        <span className="flex items-center">
          <input
            type="checkbox"
            className="mr-3"
            onClick={handleCheckboxClick}
            checked={completed}
          ></input>
          {title}
        </span>
        <button onClick={handleDeleteClick} className="">
          {FiX()}
        </button>
      </div>
    </li>
  );
}
