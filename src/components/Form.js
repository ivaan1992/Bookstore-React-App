import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooksAsync } from '../redux/books/books';
import '../App.css';

const Form = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  /* const [author, setAuthor] = useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  }; */
  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleAddBook = () => {
    const newBook = {
      name: title,
      // author,
      category,
      id: Math.ceil(Math.random() * 10000),
    };
    dispatch(addBooksAsync(newBook));
  };
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form className="addBookForm">
        <input
          type="text"
          id="book"
          placeholder="Book Title"
          value={title}
          onChange={handleChange}
        />
        {/*  <input
          type="text"
          id="author"
          placeholder="Author"
          value={author}
          onChange={handleAuthor}
        /> */}
        <input
          type="text"
          id="category"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
        />
        <button
          type="button"
          onClick={handleAddBook}
          className="Add"
        >
          Add book
        </button>
      </form>
    </>
  );
};

export default Form;
