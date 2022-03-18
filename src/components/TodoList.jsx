import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
const TodoList = (props) => {
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("pending");
  const todos = props.todos;
  // to mark as done
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleStatus = () => {
    setStatus(status === "in-progress" ? "pending" : "in-progress");
  };
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <div className="bg-gray-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <p className={checked ? "italic" : ""}>{todo.title}</p>
            <div className="flex items-center ">
              <button className="bg-red-500 text-white px-3 rounded-md text-xs mr-1">
                delete
              </button>
              {!checked ? (
                <button className="bg-green-600 text-white px-3 rounded-md text-xs">
                  edit
                </button>
              ) : (
                ""
              )}
              <Checkbox
                size="small"
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <small>
              Status:
              {checked ? (
                <span className="bg-green-500 text-white px-2 rounded-md ml-1">
                  Done
                </span>
              ) : status === "in-progress" ? (
                <span className="bg-blue-500 text-white px-2 rounded-md ml-1">
                  in-progress
                </span>
              ) : (
                <span className="bg-yellow-500 text-white px-2 rounded-md ml-1">
                  pending
                </span>
              )}
            </small>
            <div className="flex items-center gap-1">
              {checked === false ? (
                <div>
                  <small>Change status to: </small>
                  <button
                    className={
                      status === "in-progress"
                        ? "bg-yellow-500 text-white px-3 rounded-md text-xs"
                        : "bg-blue-500 text-white px-3 rounded-md text-xs"
                    }
                    onClick={handleStatus}
                  >
                    {status === "in-progress" ? "pending" : "in-progress"}
                  </button>
                </div>
              ) : (
                <p className="font-medium text-xs">Good job :)</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
