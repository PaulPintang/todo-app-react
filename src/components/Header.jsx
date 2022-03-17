import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

const Header = () => {
  const [title, setTitle] = useState("fdsf");
  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = { title };
    console.log(posts);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">What's on your mind ?</h1>
        <div className="flex items-center gap-2">
          <form onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="your post"
              variant="outlined"
              size="small"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              size="small"
              variant="contained"
              color="secondary"
              style={{ textTransform: "none" }}
              type="submit"
            >
              Add Post
            </Button>
          </form>
        </div>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
