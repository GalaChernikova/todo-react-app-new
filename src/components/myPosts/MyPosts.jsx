import PostItem from "./PostItem";
import { useSelector } from "react-redux";
import AddPost from "./AddPost";

export default function MyPosts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="flex flex-wrap gap-5">
      <AddPost />

      <div className="flex flex-wrap gap-5">
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <PostItem
                id={post.id}
                date={post.date}
                title={post.title}
                body={post.body}
                reactions={post.reactions}
              />
            </div>
          );
        })}
      </div>      
    </div>

  );
}
