import React from "react";
import { Checkbox } from "@material-ui/core";

const TodoItem = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <div className="bg-gray-200 rounded-md p-4" key={todo.id}>
          <div className="flex items-center justify-between">
            <p className={todo.done ? "italic" : ""}>{todo.title}</p>
            <div className="flex items-center ">
              <button className="bg-red-500 text-white px-3 rounded-md text-xs mr-1">
                delete
              </button>
              {!todo.done ? (
                <button className="bg-green-600 text-white px-3 rounded-md text-xs">
                  edit
                </button>
              ) : (
                ""
              )}
              <Checkbox
                size="small"
                checked={todo.done}
                // onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <small>
              Status:
              {todo.done ? (
                <span className="bg-green-500 text-white px-2 rounded-md ml-1">
                  Done
                </span>
              ) : todo.status === "in-progress" ? (
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
              {todo.done === false ? (
                <div>
                  <small>Change status to: </small>
                  <button
                    className={
                      todo.status === "in-progress"
                        ? "bg-yellow-500 text-white px-3 rounded-md text-xs"
                        : "bg-blue-500 text-white px-3 rounded-md text-xs"
                    }
                    // onClick={handleStatus}
                  >
                    {todo.status === "in-progress" ? "pending" : "in-progress"}
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

export default TodoItem;
