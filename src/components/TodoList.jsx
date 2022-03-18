import React, { useState } from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { todos, todoName, setTodoName } = props;
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todoName={todoName}
          setTodoName={setTodoName}
        />
      ))}
    </div>
  );
};

export default TodoList;
