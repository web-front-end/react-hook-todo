import React from "react";
import { shallow } from "enzyme";
import TodoList from "./../../components/TodoList";

test("todolist should not contain todoItem if todos is empty", () => {
  const props = { todos: [] };
  const TodoListWrapper = shallow(<TodoList {...props} />);
  expect(TodoListWrapper.find("TodoItem").length).toEqual(0);
});

test("the amount of todoItems should be equal to the length of todos", () => {
  const props = { todos: [{ id: 1, item: "hello world" }] };
  const TodoWrapper = shallow(<TodoList   {...props} />);
  expect(TodoWrapper.find("TodoItem").length).toEqual(1);
});
