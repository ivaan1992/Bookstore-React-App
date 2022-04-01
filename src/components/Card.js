import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Card = (props) => {
  const { book } = props;
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    dispatchRemove(removeBook(book.id));
  };

  return (
    <li key={book.id}>
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button type="button" onClick={handleRemoveBook}>
        Remove Book
      </button>
    </li>
  );
};

Card.defaultProps = { book: { name: '', author: '' } };

Card.propTypes = {
  book: PropTypes.objectOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

export default Card;
