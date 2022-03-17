import React, { useState } from "react";
// import PostList from "./PostList";
const Post = () => {
  const post = [
    {
      id: 1,
      title: "Today is a happy day",
    },
    {
      id: 2,
      title: "Keep practicing...",
    },
  ];
  return (
    <div>
      Your Post
      {post.map((post) => (
        <p>{post.title}</p>
      ))}
    </div>
  );
};

export default Post;
