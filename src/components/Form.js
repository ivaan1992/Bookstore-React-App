import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../App.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const [author, setAuthor] = useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleAddBook = () => {
    const newBook = {
      name: title,
      author,
      id: Math.ceil(Math.random() * 1000),
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <form className="addBookForm">
        <input
          type="text"
          id="book"
          placeholder="Book Title"
          value={title}
          onChange={handleChange}
        />
        <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        />
        <button type="button" onClick={handleAddBook}>
          Add book
        </button>
      </form>
    </>
  );
};

export default Form;
