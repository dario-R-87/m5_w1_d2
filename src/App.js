import Main from "./components/main/Main";
import NavScrollExample from "./components/navbar/Nav";
import Foot from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const inputValueHandler = (newSearchValue) => {
    setSearchValue(newSearchValue);
  }

  return (
    <>
      <NavScrollExample onSearch={inputValueHandler}/>
      <Main searchValue={searchValue}/>
      <Foot />
    </>
  );
}

export default App;
