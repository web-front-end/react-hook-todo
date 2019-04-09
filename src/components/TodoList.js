/* eslint-disable no-unused-vars */
import React from 'react'
import TodoItem from './TodoItem'
import EmptyAlert from './EmptyAlert'

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return todos && todos.length > 0 ? (
    todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    ))
  ) : (
    <EmptyAlert />
  )
}

export default TodoList
