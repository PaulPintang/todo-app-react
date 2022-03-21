import React, { useState, useEffect } from "react";
import { Checkbox, Button } from "@material-ui/core";

const TodoItem = ({
  todo,
  setUpdate,
  setUpdateId,
  setTodoName,
  setTodos,
  todos,
}) => {
  // const [status, setStatus] = useState(todo.status);
  // const [completed, setCompleted] = useState(todo.completed);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleEdit = () => {
    setTodoName(todo.title);
    setUpdate(true);
    setUpdateId(todo.id);
  };

  // delete todo
  const handleDelete = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // mark as done, for checkbox
  const handleComplete = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // toggle status
  const handleStatus = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            status: todo.status === "pending" ? "in-progress" : "pending",
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="bg-gray-200 rounded-md p-4 " key={todo.id}>
      <div className="flex items-center justify-between">
        <p className={todo.completed ? "italic" : ""}>{todo.title}</p>
        <div className="flex items-center ">
          <button
            className="bg-red-500 text-white px-3 rounded-md text-xs mr-1"
            onClick={handleDelete}
          >
            delete
          </button>
          {!todo.completed ? (
            <button
              className="bg-green-600 text-white px-3 rounded-md text-xs"
              onClick={handleEdit}
            >
              edit
            </button>
          ) : (
            ""
          )}
          <Checkbox
            size="small"
            checked={todo.completed}
            onChange={handleComplete}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <small>
          Status:
          <span
            className={`text-white px-2 rounded-md ml-1 ${
              todo.completed
                ? "bg-green-500"
                : todo.status === "in-progress"
                ? "bg-blue-500"
                : "bg-yellow-500"
            }`}
          >
            {todo.completed
              ? "Done"
              : todo.status === "pending"
              ? "pending"
              : "in-progress"}
          </span>
        </small>
        <div className="flex items-center gap-1">
          {!todo.completed ? (
            <div>
              <small>Change status to: </small>
              <button
                className={`text-white px-3 rounded-md text-xs ${
                  todo.status === "pending" ? "bg-blue-500" : "bg-yellow-500"
                }`}
                onClick={handleStatus}
              >
                {todo.status === "pending" ? "in-progress" : "pending"}
              </button>
            </div>
          ) : (
            <p className="font-medium text-xs">Good job :)</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
