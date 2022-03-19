import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
const Todo = () => {
  const [update, setUpdate] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  // this will run once
  useEffect(() => {
    getLocalTodos();
  }, []);

  // this will run when items in todos change
  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

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
  const handleUpdate = () => {
    alert("Update");
  };

  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
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
        {update ? (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ padding: 8 }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{ padding: 8 }}
            onClick={handleSubmit}
          >
            Add todo
          </Button>
        )}
      </div>
      <div>
        <p className="py-3"> Added todo's:</p>
        <TodoList
          todos={todos}
          setUpdate={setUpdate}
          setTodoName={setTodoName}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default Todo;
