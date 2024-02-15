import AllTheBooks from "../books/AllTheBooks";
import BooksFiltered from "../books/BooksFiltered";
import { useState } from "react";

const Main = ({searchValue}) => {
  const [books, setBooks] = useState([]);

  const setBooksCopy = (books)=>{
    setBooks(books);
  }
 // console.log(books)

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
     {searchValue ==="" && <AllTheBooks booksCopy={books} onLoadBooks={setBooksCopy} onSelect={selectHandler}/>}
     {searchValue !=="" && <BooksFiltered books={books} searchValue={searchValue} onSelect={selectHandler}/>}
    </>
  );
};

export default Main;
