import PostItem from "./PostItem";
import { useSelector } from "react-redux";

export default function MyPosts() {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="flex flex-wrap gap-5 justify-end">
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
        )
      })
      

      }
    </div>
  );
}
