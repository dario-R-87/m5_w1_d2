const SingleComment  = ({rate, comment}) => {
    return (
        <>
            <li>
                <p>{comment} <span className="fw-bold">({rate})</span></p>
            </li>
        </>
    );
}
export default SingleComment