import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Card from './Card';
import { setAllBooksFromAPI } from '../redux/books/books';

const Books = () => {
  const BookList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setAllBooksFromAPI(dispatch);
  }, []);
  return (
    <>
      <h1>Books Section</h1>
      <ul>
        {BookList.map((book) => (
          <Card key={book.name} book={book} />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default Books;
