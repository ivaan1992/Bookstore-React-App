import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksAsync } from '../redux/books/books';

const Card = (props) => {
  const { book } = props;
  const dispatchRemove = useDispatch();
  const handleRemoveBook = () => {
    removeBooksAsync(book.id)(dispatchRemove);
  };

  return (
    <div className="card-complete">
      <div className="info">
        <li className="bookInfo">
          <p className="book-category">{book.category}</p>
          <h1 className="book-title">{book.name}</h1>
          <p className="book-author">{book.author}</p>
        </li>
        <div className="buttons">
          <button type="button" className="info-btn">Comments</button>
          <button type="button" onClick={handleRemoveBook} className="info-btn">
            Remove
          </button>
          <button type="button" className="info-btn">Edit</button>
        </div>
      </div>
      <div className="left d-flex">
        <div className="porcentage">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left" />
            <div className="circle" data-anim="base right" />
          </div>
          <div className="presentage d-flex">
            <span className="pres">
              100%
            </span>
            <span className="completed">
              Completed
            </span>
          </div>
        </div>
      </div>
    </div>
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
