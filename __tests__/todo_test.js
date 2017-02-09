import React from 'react';
import Todo from '../src/components/Todo';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

/* Snapshot */
test('should render the todo component', () => {
	const component = renderer.create(
		<Todo text="Attend Chennai JS Meetup" completed={false} onClick={jest.fn()}/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})

/* Shallow */
test('should render the given todo title', () => {
	const todoTitle = "todo_title";
	const todo = shallow(<Todo text={todoTitle} completed={false} onClick={jest.fn()}/>);
	expect(todo.text()).toBe(todoTitle);
})

test('should call onClick', () => {
	let mockOnClick = jest.fn();
	const todo = shallow(<Todo text="todo_title" completed={false} onClick={mockOnClick}/>);

	todo.find('li').simulate('click');
	expect(mockOnClick.mock.calls.length).toBe(1);
})

test('should mark as completed', () => {
	const todo = shallow(<Todo text="todo_title" completed={true} onClick={jest.fn()}/>);

	let li = todo.find('li');
	expect(li.prop('style').textDecoration).toBe('line-through');
})



