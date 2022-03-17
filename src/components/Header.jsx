import React from "react";
import { Button } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Your Post</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </div>
  );
};

export default Header;
