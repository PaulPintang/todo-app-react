import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
const Todo = () => {
  // add 3 initial object values
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ]);
  const [todoName, setTodoName] = useState("");

  const handleInput = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      // spread initial data,
      ...todos,
      {
        id: 4,
        title: todoName,
      },
    ]);
  };
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <TextField
          id="outlined-basic"
          label="your new todo"
          variant="outlined"
          size="small"
          onChange={handleInput}
          value={todoName}
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ padding: 8 }}
          onClick={handleSubmit}
        >
          Add todo
        </Button>
      </div>
      <div>
        <p class="py-3">You input: {todoName}</p>
        <p className="py-3"> Added todo's:</p>
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default Todo;
