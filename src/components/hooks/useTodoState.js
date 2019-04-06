import { useState, useEffect } from "react";
import { addTodoMock, deleteTodoMock, listTodosMock, updateTodoMock } from "./../apis/todo";

export default useTodoState => {
  const [todos, setTodos] = useState([]);
  // init todos
  useEffect(() => {
    listTodosMock(todos => {
      setTodos(todos);
    });
  },[]);
  return {
    todos,
    deleteTodo: id => {
      deleteTodoMock(id, todos => {
        setTodos(todos);
      });
    },
    toggleTodo: id =>{
      updateTodoMock(id, todos =>{
        setTodos(todos);
      });
    },
    addTodo: todo => {
      addTodoMock(todo, todos => {
        setTodos(todos);
      });
    }
  };
};
