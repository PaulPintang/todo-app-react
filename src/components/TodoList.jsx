import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
const TodoList = () => {
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState("");
  // to mark as done
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleStatus = () => {
    // status === "in-progress" ? setStatus("in-progress") : setStatus("pending");
    setStatus(status === "in-progress" ? "pending" : "in-progress");
  };
  return (
    <div>
      <div className="bg-gray-200 rounded-md p-4">
        <div className="flex items-center justify-between">
          <p className={checked ? "italic" : ""}>Sleep</p>
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
            {status === "in-progress" ? (
              <button
                className="bg-blue-500 text-white px-3 rounded-md text-xs"
                onClick={handleStatus}
              >
                in-progress
              </button>
            ) : (
              <span
                className={
                  checked
                    ? "bg-green-500 text-white px-2 rounded-md"
                    : "bg-yellow-500 text-white px-2 rounded-md"
                }
              >
                {checked ? "Done" : "Pending"}
              </span>
            )}
          </small>
          <div className="flex items-center gap-1">
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
        </div>
      </div>
    </div>
  );
};

export default TodoList;
