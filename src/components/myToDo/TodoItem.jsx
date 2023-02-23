import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "./../../redux/todoSlice";
import { FiX, FiCheck } from "react-icons/fi";
import Checkbox from "react-custom-checkbox";

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <li
      className={`${completed && "line-through"}`}
      onClick={handleCheckboxClick}
      key={id}
    >
      <div className="flex justify-between sm:text-sm mb-2">
        <span className="flex items-center font-main text-lg sm:text-base">
          <Checkbox
            icon={FiCheck()}
            borderColor="#57534E"
            className="mr-3"
            onClick={handleCheckboxClick}
            checked={completed}
          ></Checkbox>
          {title}
        </span>
        <button onClick={handleDeleteClick} className="">
          {FiX()}
        </button>
      </div>
    </li>
  );
}
