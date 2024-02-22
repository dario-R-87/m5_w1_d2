import React from 'react';
import Main from "../components/main/Main";
import MainLayout from "../components/layouts/MainLayout";
import NavScrollExample from "../components/navbar/Nav";
import { useState } from "react";

const Homepage = () => {
    const [searchValue, setSearchValue] = useState("");

    const inputValueHandler = (newSearchValue) => {
        setSearchValue(newSearchValue);
    }

    return (
        <MainLayout>
            <NavScrollExample onSearch={inputValueHandler} />
            <Main  searchValue={searchValue}/>
        </MainLayout>
    );
};

export default Homepage;