import SingleBook from "../card/SingleBook";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";

const BooksFiltered = ({ books, searchValue, onSelect  }) => {

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
                            onSelect={onSelect}
                            id={book.asin}
                            selectedValue={book.selected}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default BooksFiltered;