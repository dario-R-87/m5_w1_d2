import SingleComment from "./SingleComment"
import { nanoid } from "nanoid";

const CommentList = ({ comments }) => {
    return (
        <ol>
            {comments.map((comment) => {
                return (
                    <SingleComment
                        key={nanoid()}
                        rate={comment.rate}
                        comment={comment.comment}
                    />
                );
            })}
        </ol>
    );
}

export default CommentList;