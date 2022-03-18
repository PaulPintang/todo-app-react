import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

const TodoItem = ({ todo }) => {
  const [status, setStatus] = useState(todo.status);
  const handleStatus = () => {
    setStatus(status === "pending" && "in-progress" ? "done" : "pending");
  };
  return (
    <div className="bg-gray-200 rounded-md p-4" key={todo.id}>
      <div className="flex items-center justify-between">
        <p className={status === "done" ? "italic" : ""}>{todo.title}</p>
        <div className="flex items-center ">
          <button className="bg-red-500 text-white px-3 rounded-md text-xs mr-1">
            delete
          </button>
          {status !== "done" ? (
            <button className="bg-green-600 text-white px-3 rounded-md text-xs">
              edit
            </button>
          ) : (
            ""
          )}
          <Checkbox
            size="small"
            checked={
              status === "pending" ? false : status === "done" ? true : ""
            }
            onChange={handleStatus}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <small>
          Status:
          {status === "done" ? (
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
          {status === "pending" ? (
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
  );
};

export default TodoItem;
