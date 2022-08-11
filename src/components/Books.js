import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Card.css';

const Books = () => {
  const [books, setBooks] = useState([]);

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
    <div className="container py-5">
      <h1 className="text-center">Best Sellers</h1>

      <div className="row py-5">
        <div className=" row row-cols-1 row-cols-1 row-cols-lg-3 row-cols-lg-4 g-4 ">
          {books.map((book) => {
            const {
              author,
              book_image,
              buy_links,
              description,
              title,

              rank,
            } = book;

            return (
              <div className="card mt-4" key={rank}>
                <img className="img" src={book_image} alt={title} />

                <div className="card-body">
                  <h4 className="text-muted">Author:{author}</h4>
                  <h4 className="text-muted">{description}</h4>
                  {buy_links.map((link) => {
                    const { name, url } = link;
                    return (
                      <a className="nav-links" href={url}>
                        {name}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Books;
