import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

export default function TodoList() {
	const todos = useSelector((state) => state.todos);

	return (
		<ul className=''>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};