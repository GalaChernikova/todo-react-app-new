import PostItem from "./PostItem";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MyPosts() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts/user/2")
      .then((res) => setPosts(res.data.posts));
  }, []);
  console.log(posts);

  return (
    <div className="flex flex-wrap gap-5 justify-end">
      {Array.from(posts).map((post) => {
        return (
          <div key={post.id}>
            <PostItem
              id={post.id}
              title={post.title}
              body={post.body}
              tags={post.tags}
              reactions={post.reactions}
            />
          </div>
        );
      })}
    </div>
  );
}
