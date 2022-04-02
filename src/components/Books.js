import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Card from './Card';
import { setAllBooksFromApi } from '../redux/books/books';

const Books = () => {
  const BookList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    setAllBooksFromApi(dispatch);
  }, []);
  return (
    <>
      <div className="booksBody">
        <ul>
          {BookList.map((book) => (
            <Card key={book.name} book={book} />
          ))}
        </ul>
        <Form />
      </div>
    </>
  );
};

export default Books;
