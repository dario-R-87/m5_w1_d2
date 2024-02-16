import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "../comments/CommentArea";

const SingleBook = ({ img, category, price, title, onSelect, id, selectedValue }) => {

  const [selected, setSelected] = useState(selectedValue);
  const [show, setShow] = useState(false);

  const selectedHandler = () => {
    setSelected(!selected);
    onSelect(id, !selected);
  }

  const showdHandler = () => {
    setShow(!show)
  }

  return (
    <Card style={{ width: "18rem" }} className={selected ? "border border-3 border-danger" : ""}>
      <Card.Img variant="top" src={img} onClick={showdHandler} className="img_card"/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={selectedHandler}>{!selected ? "selected" : "deselected"}</Button>
      </Card.Body>
      {show && <CommentArea asin={id} onClose={showdHandler}/>}
    </Card>
  );
};

export default SingleBook;
