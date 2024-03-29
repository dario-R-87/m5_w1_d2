import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommentList from "./CommentList";
import LoadSpinner from "../loading/LoadSpinner";
import AddComment from "./AddComment";

function CommentArea({ asin, onClose }) {
  const [show, setShow] = useState(true);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(0);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDgwNzI4NDYsImV4cCI6MTcwOTI4MjQ0Nn0.1sxHpcQ5oKegWdxkGgevHAXbQexhncKJC4GyeRA3aq0";
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const getComments = async () => {
    try {
      setLoading(true);
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`,
        options
      );
      const data = await resp.json();
      setComments(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const addComment = async (comment) => {
    comment = {
      ...comment,
      elementId: asin,
    };
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          ...options,
          method: "POST",
          body: JSON.stringify(comment),
        }
      );
      if (!response.ok) {
        setError(await response.text());
      }
      setAdded(added + 1);
    } catch (e) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getComments();
  }, [added]);

  const handleClose = () => {
    setShow(false);
    onClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Leave a comment</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row justify-content-center mx-3">
          {error && <div>Ops, something went wrong...</div>}
          {loading && !error && <LoadSpinner />}
          {!loading && !error && <AddComment onAdd={addComment} />}
          {!loading && !error && <CommentList comments={comments} />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentArea;
