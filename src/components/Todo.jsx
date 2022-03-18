import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
const Todo = () => {
  // add 3 initial object values
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  const handleInput = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todos) => [
      // ...spread initial data,
      ...todos,
      {
        id: Math.random() * 1000,
        title: todoName,
        status: "pending",
        completed: false,
      },
    ]);
    // empty/null the input value after submit
    setTodoName("");
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
        <p className="py-3"> Added todo's:</p>
        <TodoList todos={todos} todoName={todoName} setTodoName={setTodoName} />
      </div>
    </div>
  );
};

export default Todo;
