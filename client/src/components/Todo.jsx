import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
import axios from "axios";
const Todo = () => {
  const [update, setUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  // this will run once, get data from the database
  useEffect(() => {
    axios.get("http://localhost:5000/api/todos").then((res) => {
      setTodos(res.data);
    });
  }, []);

  const handleInput = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/api/todos", {
        // addd to database
        title: todoName,
        status: "pending",
        completed: false,
      })
      .then(() => {
        setTodos([
          // ...spread initial data, show data without refresh
          ...todos,
          // add to state
          {
            title: todoName,
            status: "pending",
            completed: false,
          },
        ]);
      });
    // empty/null the input value after submit
    setTodoName("");
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:5000/api/todos/${updateId}`, {
        title: todoName,
      })
      .then((res) => {
        setTodos(
          todos.map((item) => {
            if (item.id === updateId) {
              return {
                ...item,
                title: todoName,
              };
            }
            return item;
          })
        );
      });
    setUpdate(false);
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
        {update ? (
          <Button
            variant="contained"
            size="small"
            style={{ padding: 8, background: "#16A34A", color: "white" }}
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
          setUpdateId={setUpdateId}
        />
      </div>
    </div>
  );
};

export default Todo;
