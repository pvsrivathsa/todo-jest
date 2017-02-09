import React from 'react';
import TodoList from '../src/components/TodoList';
import renderer from 'react-test-renderer';

/* Snapshot */

test('should render the todo list component', () => {
	const todoList = [{
		id: 1,
		text: "Attend Chennai JS Meetup",
		completed: false
	}]
	const component = renderer.create(
		<TodoList todos={todoList} onTodoClick={jest.fn()}/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})