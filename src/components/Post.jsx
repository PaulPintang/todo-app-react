import React, { useState } from "react";
import PostList from "./PostList";
const Post = () => {
  const posts = [
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
      {/* {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))} */}
      <PostList post={posts} />
    </div>
  );
};

export default Post;
