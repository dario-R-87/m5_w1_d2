import SingleBook from "../card/SingleBook";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";

const BooksFiltered = ({ books, searchValue }) => {

    const filteredBooks = books.filter((book) => {
        return book.title.toLowerCase().includes(searchValue.toLowerCase())
    });

    return (
        <Container>
            <Row className="gap-3 justify-content-center my-3">
                {filteredBooks.map((book) => {
                    return (
                        <SingleBook
                            key={nanoid()}
                            img={book.img}
                            category={book.category}
                            price={book.price}
                            title={book.title}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default BooksFiltered;