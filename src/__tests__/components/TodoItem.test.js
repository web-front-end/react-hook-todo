/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from './../../components/TodoItem'

test('verify TodoItem component', () => {
  const props = { todo: { id: 1, item: 'hello world' } }
  const TodoItemWrapper = shallow(<TodoItem {...props}/>)
  expect(TodoItemWrapper.find('.todo-item').length).toEqual(1)
})
