import React, { useState } from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  // const [checked, setChecked] = useState(false);
  // const [status, setStatus] = useState("pending");
  const todos = props.todos;
  // to mark as done
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  // const handleStatus = (id) => {
  //   setStatus(status === "in-progress" ? "pending" : "in-progress");
  // };
  return (
    <div className="space-y-3">
      <TodoItem todos={todos} />
    </div>
  );
};

export default TodoList;
