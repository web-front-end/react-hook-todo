import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {useTodoState} from './hooks';


const Todo = () => {
    const {addTodo, todos, deleteTodo,toggleTodo } = useTodoState();
    return (
        <div className='todo-container'>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/> 
        </div>
    )
}

export default Todo;