import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem";

export default function Comments(){
    const comments = useSelector((state) => state.comments);

    return (
        <div>
            {comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <CommentsItem 
                            id={comment.id}
                            name={comment.name}
                            text={comment.text}
                        />
                    </div>
                )
            })}
            
        </div>
    )
}