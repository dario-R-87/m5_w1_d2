import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = ({ img, category, price, title, onSelect, id, selectedValue }) => {

  const [selected, setSelected] = useState(selectedValue);

  const selectedHandler = () => {
    setSelected(!selected);
    onSelect(id, !selected);
  }

  return (
    <Card style={{ width: "18rem" }} className={selected ? "border border-3 border-danger" : ""}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="primary" onClick={selectedHandler}>{!selected ? "selected" : "deselected"}</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
