export const addTodoMock = (todo, cb) => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  let arr = []
  if (todos.length === 0) {
    arr = [{ ...{ id: 1 }, item: todo.item, isComplete: false }]
    localStorage.setItem('todos', JSON.stringify(arr))
  } else {
    arr = todos.concat([
      { ...{ id: todos[todos.length - 1].id + 1 }, item: todo.item }
    ])
    localStorage.setItem('todos', JSON.stringify(arr))
  }
  if (typeof cb === 'function') {
    cb(arr)
  }
}

export const deleteTodoMock = (id, cb) => {
  const todos = JSON.parse(localStorage.getItem('todos'))
  const arr = todos.filter(todo => todo.id !== id)
  localStorage.setItem('todos', JSON.stringify(arr))
  if (typeof cb === 'function') {
    cb(arr)
  }
}

export const listTodosMock = cb => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]))
  }
  const todos = JSON.parse(localStorage.getItem('todos'))
  if (typeof cb === 'function') {
    cb(todos)
  }
}

export const updateTodoMock = (id, cb) => {
  let todos = JSON.parse(localStorage.getItem('todos'))
  todos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, isComplete: !todo.isComplete }
    } else {
      return todo
    }
  })
  localStorage.setItem('todos', JSON.stringify(todos))
  if (typeof cb === 'function') {
    cb(todos)
  }
}

export const listFilteredTodoMock = (status, cb) => {
  let todos = JSON.parse(localStorage.getItem('todos'))
  let filteredTodos = []
  switch (status) {
    case 'active': {
      filteredTodos = todos.filter(todo => todo.isComplete !== true)
      break
    }
    case 'completed': {
      filteredTodos = todos.filter(todo => todo.isComplete === true)
      break
    }
    default:
      filteredTodos = todos
  }
  if (typeof cb === 'function') {
    cb(filteredTodos)
  }
}
