import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SearchBar = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState("");

    const inputValueHandler = (e)=>{
        setSearchValue(e.target.value);
        if(e.target.value==="") onSearch("");
    }
    
    const clickBtnHandler = ()=>{
        onSearch(searchValue);
    }

    return (<Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchValue}
            onChange={inputValueHandler}
        />
        <Button variant="outline-success" onClick={clickBtnHandler}>Search</Button>
    </Form>)
}

export default SearchBar;