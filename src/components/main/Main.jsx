import AllTheBooks from "../books/AllTheBooks";
import BooksFiltered from "../books/BooksFiltered";
import { useState } from "react";

const Main = ({searchValue}) => {
  const [books, setBooks] = useState([]);

  const getBooks = (books)=>{
    setBooks(books);
    console.log(books)
  }

  return (
    <>
     {searchValue ==="" && <AllTheBooks onLoadBooks={getBooks}/>}
     {searchValue !=="" && <BooksFiltered books={books} searchValue={searchValue}/>}
    </>
  );
};

export default Main;
