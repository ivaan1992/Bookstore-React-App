import React from 'react';
import '../App.css';

const Form = () => (
  <form className="addBookForm">
    <input type="text" id="book" placeholder="Add a book..." />
    <input type="text" id="author" placeholder="Author" />
    <button type="button">Add book</button>
  </form>
);

export default Form;
