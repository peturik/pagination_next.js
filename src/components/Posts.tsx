import React from "react";

type Props = {
  posts: any[];
  loading: boolean;
};

export const Posts = ({ posts, loading }: Props) => {
  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <ul className="mb-4">
        {posts.map((post) => (
          <li key={post.id} className="">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
