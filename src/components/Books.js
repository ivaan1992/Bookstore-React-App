import React from 'react';
import Form from './Form';

const bookInfo = {
  title: 'Dorian Gray',
  author: 'Oscar Wilde',
  id: 1,
};

const List = () => (
  <li>
    {bookInfo.title}
    <br />
    {bookInfo.author}
    <br />
    <button type="button">Remove book</button>
  </li>
);

const Books = () => (
  <div>
    <h1>Books Section</h1>
    <ul>
      <List />
    </ul>
    <Form />
  </div>
);

export default Books;
