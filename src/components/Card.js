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
    <div className="card-complete d-flex">
      <div className="info d-flex">
        <li className="bookInfo d-flex">
          <p className="book-category">{book.category}</p>
          <h1 className="book-title roboto">{book.name}</h1>
          <p className="book-author roboto">{book.author}</p>
        </li>
        <div className="buttons d-flex">
          <button type="button" className="info-btn roboto">Comments</button>
          <button type="button" onClick={handleRemoveBook} className="info-btn roboto">
            Remove
          </button>
          <button type="button" className="info-btn roboto">Edit</button>
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
      <div className="progress">
        <h4 className="roboto">CURRENT CHAPTER</h4>
        <span className="lesson roboto">Chapter 17</span>
        <button className="Remove roboto" type="button">Update progress</button>
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
