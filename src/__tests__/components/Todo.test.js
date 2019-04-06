import React from 'react';
import { shallow } from 'enzyme';
import Todo from './../../components/Todo';


test('verify Todo component', () =>{
    const TodoWrapper = shallow(<Todo />);
    expect(TodoWrapper.find('TodoForm').length).toEqual(1);
    expect(TodoWrapper.find('TodoList').length).toEqual(1);
})

test('verify the amount of TodForm', ()=>{
    const TodoWrapper = shallow(<Todo />);
    expect(TodoWrapper.find('TodoForm').length).toEqual(1);
})