import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import TodoList from "./TodoList";
const Todo = () => {
  return (
    <div>
      <div className="flex items-center gap-2 justify-center">
        <TextField
          id="outlined-basic"
          label="your new todo"
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ padding: 8 }}
        >
          Add todo
        </Button>
      </div>
      <div>
        <p className="py-3"> Added todo's:</p>
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
