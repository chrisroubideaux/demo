import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Form.css';
import { fetchBooks } from './api/fetchBooks';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState({});

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchBooks(query);
      books(data);
      setBooks(data);
      setQuery('');
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key='
      );
      setBooks(res.data.results.books);
      console.log(res.data.results.books);
    };

    fetchBooks();
  }, []);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="social-icons fas fa-align-right"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link nav-item" to="/">
                <img
                  src="https://pngimg.com/uploads/book/book_PNG51106.png"
                  alt=""
                  width="40"
                  height="30"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="bg-transparent text-white mt-3 form-control w-100"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
              >
                Search
                <i className=" mr-2 social-icons fa-solid fa-magnifying-glass"></i>
                {books && (
                  <div className="city">
                    <h2 className="city-name">
                      <span>{books}</span>
                      <sup>{books}</sup>
                    </h2>
                    <div className="city-temp">
                      {books}
                      <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                      <img className="img" src={book_image} alt={title} />

                      <p>{books}</p>
                    </div>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
