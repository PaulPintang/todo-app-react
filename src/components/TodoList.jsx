import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  const { todos, setUpdate, setUpdateId, setTodoName, setTodos } = props;

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setUpdate={setUpdate}
          setTodoName={setTodoName}
          setTodos={setTodos}
          todos={todos}
          setUpdateId={setUpdateId}
        />
      ))}
    </div>
  );
};

export default TodoList;
