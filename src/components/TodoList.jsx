import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
const TodoList = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <div className="bg-gray-200 rounded-sm p-4">
        <div className="flex items-center justify-between">
          <p className="font-medium">Sleep</p>
          <div className="flex items-center">
            <button className="bg-red-500 text-white px-3 rounded-md text-xs mr-1">
              delete
            </button>
            {!checked ? (
              <button className="bg-green-600 text-white px-3 rounded-md text-xs">
                edit
              </button>
            ) : null}
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
            Status:{" "}
            <span className="bg-yellow-500 text-white px-2 rounded-md">
              Pending
            </span>
          </small>
          <div className="flex items-center gap-1">
            <small>Change status to: </small>
            <button className="bg-blue-500 text-white px-3 rounded-md text-xs">
              in-progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;