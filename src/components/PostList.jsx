import React from "react";

const PostList = (props) => {
    const posts = props.post
  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PostList;
