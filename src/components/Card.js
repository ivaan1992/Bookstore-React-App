import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/books';

const Card = (props) => {
  const { book } = props;
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    removeBookAsync(book.id)(dispatchRemove);
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
      id: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

export default Card;
