import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";

const BookDetail = () => {
    const { id } = useParams()
    const [book, setBook] = useState(null)

    const currentPath = useLocation()
    console.log(currentPath)

    const getBookDetails = async () => {
        try {
            const response = await fetch(`https://epibooks.onrender.com/${id}`)
            const data = await response.json()
            setBook(data.at(0))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getBookDetails()
    }, [id]);

    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>{book && book.asin}</p>
                        <p>{book && book.title}</p>
                        <p>{book && book.category}</p>
                        <img className="w-25" src={book && book.img} alt=""/>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default BookDetail;