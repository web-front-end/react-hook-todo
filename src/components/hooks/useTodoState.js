import { useState, useEffect } from 'react'
import {
  addTodoMock,
  deleteTodoMock,
  listTodosMock,
  updateTodoMock,
  listFilteredTodoMock
} from './../apis/todo'

export default useTodoState => {
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  // init todos
  useEffect(() => {
    listTodosMock(todos => {
      setTodos(todos)
    })
  }, [])
  return {
    todos,
    status,
    deleteTodo: id => {
      deleteTodoMock(id, todos => {
        setTodos(todos)
        setStatus('all')
      })
    },
    toggleTodo: id => {
      updateTodoMock(id, todos => {
        setTodos(todos)
        setStatus('all')
      })
    },
    addTodo: todo => {
      addTodoMock(todo, todos => {
        setTodos(todos)
        setStatus('all')
      })
    },
    filterTodos: status => {
      listFilteredTodoMock(status, todos => {
        setTodos(todos)
        setStatus(status)
      })
    }
  }
}
