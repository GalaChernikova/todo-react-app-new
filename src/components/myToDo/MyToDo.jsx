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
    <div className="flex flex-col font-main text-2xl text-stone-600 bg-red-50 rounded-2xl w-1/3">
		<form onSubmit={onSubmit} className='my-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='rounded-xl px-5 py-2 text-lg mb-3 w-80 border-stone-600 border-2 bg-red-50'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='text-lg bg-stone-600 rounded-xl text-red-50 drop-shadow-xl py-2 px-5 w-36 hover:bg-stone-800'>
				Add task
			</button>
		</form>


    </div>
  );
}
