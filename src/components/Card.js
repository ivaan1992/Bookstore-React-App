import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksAsync } from '../redux/books/books';

const Card = (props) => {
  const { book } = props;
  console.log(book);
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    removeBooksAsync(book.id)(dispatchRemove);
  };

  return (
    <li className="bookInfo">
      <p>{book.name}</p>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <p>{book.id}</p>

      <button type="button" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </li>
  );
};

Card.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
