import AllTheBooks from "../books/AllTheBooks";
import BooksFiltered from "../books/BooksFiltered";
import { useState } from "react";

const Main = ({searchValue}) => {
  const [books, setBooks] = useState([]);

  const setBooksCopy = (books)=>{
    setBooks(books);
  }

  return (
    <>
     {searchValue ==="" && <AllTheBooks onLoadBooks={setBooksCopy}/>}
     {searchValue !=="" && <BooksFiltered books={books} searchValue={searchValue}/>}
    </>
  );
};

export default Main;
