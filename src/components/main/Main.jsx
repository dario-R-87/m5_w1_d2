import AllTheBooks from "../books/AllTheBooks";
import BooksFiltered from "../books/BooksFiltered";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBooks, getBooks, isAllBooksLoading } from "../../reducers/books/booksSlice";

const Main = ({ searchValue }) => {
  // const b = useSelector(allBooks)
  // const isLoading = useSelector(isAllBooksLoading)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getBooks())
  // }, [dispatch]);
  // console.log(b)
  // console.log(isLoading)

  const [books, setBooks] = useState([]);

  const setBooksCopy = (books) => {
    setBooks(books);
  }

  const selectHandler = (id, selectedValue) => {
    const index = books.findIndex(book => book.asin === id);
    if (index !== -1) {
      const updatedBooks = [...books];
      updatedBooks[index] = {
        ...updatedBooks[index],
        selected: selectedValue
      };
      setBooks(updatedBooks);
    }
  }

  return (
    <>
      {searchValue === "" && <AllTheBooks booksCopy={books} onLoadBooks={setBooksCopy} onSelect={selectHandler} />}
      {searchValue !== "" && <BooksFiltered books={books} searchValue={searchValue} onSelect={selectHandler} />}
    </>
  );
};

export default Main;
