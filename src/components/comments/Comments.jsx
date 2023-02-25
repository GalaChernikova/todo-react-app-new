import { useSelector } from "react-redux";
import CommentsItem from "./CommentsItem";

export default function Comments(){
    const allComments = useSelector((state) => state.posts);
console.log(allComments)
    return (
        <div>
            {Array.from(allComments).map((comment) => {
                return (
                    <div key={comment.comments.comId}>
                        <CommentsItem 
                            comId={comment.comments.comId}
                            comName={comment.comments.comName}
                            comText={comment.comments.comText}

                            
                        />
                        
                    </div>
                )
            })}
            
            
        </div>
    )
}