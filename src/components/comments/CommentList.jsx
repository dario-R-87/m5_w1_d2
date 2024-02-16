import SingleComment from "./SingleComment"
import { nanoid } from "nanoid";

const CommentList = ({ comments }) => {
    return (
        <ul>
            <h3 className="text-center">Comments List</h3>
            {comments.map((comment) => {
                return (
                    <SingleComment
                        key={nanoid()}
                        rate={comment.rate}
                        comment={comment.comment}
                    />
                );
            })}
        </ul>
    );
}

export default CommentList;