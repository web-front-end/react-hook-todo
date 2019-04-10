/* eslint-disable no-unused-vars */
import React from 'react'

import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import { useTodoState } from './hooks'

const Todo = () => {
  const { addTodo, todos, deleteTodo, toggleTodo, filterTodos, status } = useTodoState()
  return (
    <div className='todo-container'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      <Footer todos={todos} filterTodos={filterTodos} status={status}/>
    </div>
  )
}

export default Todo
