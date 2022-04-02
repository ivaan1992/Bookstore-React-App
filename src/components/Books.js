import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Card from './Card';

const Books = () => {
  const BookList = useSelector((state) => state.bookReducer);
  return (
    <>
      <h1>Books Section</h1>
      <ul>
        {BookList.map((book) => (
          <Card key={book.title} book={book} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
