import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { todos, setUpdate, setTodoName } = props;
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setUpdate={setUpdate}
          setTodoName={setTodoName}
        />
      ))}
    </div>
  );
};

export default TodoList;
