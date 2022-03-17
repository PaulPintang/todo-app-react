import React from "react";
import { Button } from "@material-ui/core";

const Header = () => {
  const addPost = () => {
    alert("add post");
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">What's on your mind ?</h1>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          style={{ textTransform: "none" }}
          onClick={addPost}
        >
          Add Post
        </Button>
      </div>
    </div>
  );
};

export default Header;
