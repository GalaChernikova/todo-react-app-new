import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addTask } from "../../redux/todoSlice";

export default function MyToDo() {
    const [value, setValue] = useState('');
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
    <div className="flex flex-col font-main text-2xl text-stone-600 bg-red-50 rounded-2xl p-4 w-1/3">
		<form onSubmit={onSubmit} className='my-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className=''
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className=''>
				Submit
			</button>
		</form>
        {/* <div className="flex">
            <input
                type="checkbox"
                name="taskDone"
                id="taskDone"
                onClick={() => dispatch(completeTask)}
            />
            <span>{todo}</span>            
        </div>

        <div className="flex gap-x-5">
            <button onClick={() => dispatch(addTask)} className="w-1/2 border-2 border-stone-600 rounded-xl py-1 text-base bg-stone-600 text-red-50 hover:bg-stone-800">Add task</button>
            <button onClick={() => dispatch(removeTask)} className="w-1/2 border-2 border-stone-600 rounded-xl py-1 text-base hover:bg-red-100">Remove Task</button>            
        </div> */}


    </div>
  );
}
