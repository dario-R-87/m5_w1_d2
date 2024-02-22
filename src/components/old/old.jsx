import {navLinks} from "../../data/navLinks";
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {filterBooks, getBooks} from "../../reducers/books/booksSlice";
import {useState} from "react";


const Navigation = () => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleFilterBooks = (e) => {
        e.preventDefault();
        dispatch(filterBooks(query))
    }

    const onChangeSearchInput = (e) => {
        setQuery(e.target.value)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">Epibooks</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li key={nanoid()} className="nav-item">
                                <a className="nav-link active" aria-current="page" href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            onChange={(e) => {
                                e.target.value === '' ? dispatch(getBooks()) : onChangeSearchInput(e)
                            }}
                            className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button
                            onClick={handleFilterBooks}
                            className="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;