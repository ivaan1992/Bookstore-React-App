import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";

const Card = (props) => {
  const { book } = props;

  return (
    <li key={book.id}>
      <p>{book.name}</p>
      <p>{book.author}</p>
      <button type="button">
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
