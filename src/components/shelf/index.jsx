import React from 'react';
import './shelf.css';
import { default as Book } from '../book';
import props from 'prop-types';
function Shelf(props) {
  return (
    <div className="book-shelf">
      <div className="book-container-name">
        <p>
          <i>{props.author}</i>
        </p>
      </div>
      <div className="book-container">
        {props.books.map((book, index) => {
          return <Book key={index} book={book} bgColor={index % 2 === 0} />;
        })}
      </div>
    </div>
  );
}

export default Shelf;

Shelf.propTypes = {
  author: props.string.isRequired,
  books: props.array.isRequired,
};
