import React from 'react';
import { mount } from 'enzyme';
import TodoForm from './../../components/TodoForm';


test('verify TodoForm component', () =>{
    const TodoFormWrapper = mount(<TodoForm />);
    expect(TodoFormWrapper.find('form').length).toEqual(1);
    expect(TodoFormWrapper.find('input').length).toEqual(1);
})