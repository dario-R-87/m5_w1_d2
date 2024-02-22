import Main from "./components/main/Main";
import NavScrollExample from "./components/navbar/Nav";
import Foot from "./components/footer/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/ErrorPage";
import BookDetail from "./pages/BookDetail";

function App() {
  // const [searchValue, setSearchValue] = useState("");

  // const inputValueHandler = (newSearchValue) => {
  //   setSearchValue(newSearchValue);
  // }

  return (
    // <>
    //   <NavScrollExample onSearch={inputValueHandler}/>
    //   <Main searchValue={searchValue}/>
    // </>
    <BrowserRouter>
      <Routes>
        <Route exact path="/m5_w1_d2/" element={<Homepage />} />
        <Route path="/m5_w1_d2/book/:id" element={<BookDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
