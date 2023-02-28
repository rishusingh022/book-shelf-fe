import React, { useEffect } from 'react';
import bookCover from '../../assets/cover_image.jpeg';
import redHeart from '../../assets/heart-red.svg';
import blackHeart from '../../assets/heart-black.svg';
import './book.css';
import mockdata from '../../mocks/data.json';
import props from 'prop-types';

const data = mockdata['J K Rowling'][0];

function Book(props) {
  const [liked, setLiked] = React.useState(false);
  const likeHandler = () => {
    setLiked(!liked);
  };
  return (
    <div
      style={{ background: props.bgColor ? '#ff8c00' : 'white' }}
      className="book"
    >
      <img src={bookCover} alt="Harry Potter and the Sorcerer's Stone" />
      <div
        style={{ color: props.bgColor ? 'black' : '#ff8c00' }}
        className="book-info"
      >
        {data.Name}
      </div>
      <div className="book-footer">
        <p
          style={{ color: props.bgColor ? 'black' : '#ff8c00' }}
          className="book-rating"
        >
          {data.rating}
        </p>
        <img
          onClick={likeHandler}
          src={liked ? redHeart : blackHeart}
          alt="red heart"
        />
      </div>
    </div>
  );
}

export default Book;

Book.propTypes = {
  bgColor: props.bool,
};
