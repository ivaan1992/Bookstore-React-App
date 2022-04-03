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
  const [author, setAuthor] = useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };
  const handleAddBook = () => {
    const newBook = {
      name: title,
      author,
      category,
      id: Math.ceil(Math.random() * 10000),
    };
    dispatch(addBooksAsync(newBook));
  };
  return (
    <>
      <div className="form d-flex">
        <h2>ADD NEW BOOK</h2>
        <form className="addBookForm d-flex">
          <div className="d-flex">
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
          </div>

          <select
            id="category"
            placeholder="Category"
            value={category}
            onChange={handleCategory}
          >
            <option value={category}>Drama</option>
            <option value={category}>Action</option>
            <option value={category}>Fiction</option>
            <option value={category}>Horror</option>
            <option value={category}>Romance</option>
          </select>
          <button
            type="button"
            onClick={handleAddBook}
            className="Add"
          >
            Add book
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
