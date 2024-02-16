const SingleComment  = ({rate, comment}) => {
    return (
        <>
            <li>
                <p className="m-0"><span className="fw-bold">Comment</span></p><p>{comment}</p>
                <p className="m-0"><span className="fw-bold">rate</span></p><p>{rate}</p>
            </li>
        </>
    );
}
export default SingleComment