import booksApi from '../../components/Api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookstore/books/SET_ALL_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const setAllBooks = (payload) => ({
  type: SET_ALL_BOOKS,
  payload,
});

export const setAllBooksFromApi = (dispatch) => {
  booksApi.getBooksFromApi().then((data) => {
    const books = [];
    Object.entries(data).forEach(([id, info]) => {
      const { title: name, author, category } = info[0];
      const addNewBooks = {
        id,
        name,
        author,
        category,
      };
      books.push(addNewBooks);
    });
    dispatch(setAllBooks(books));
  });
};

export const addBooksAsync = (bookProps) => (dispatch) => {
  const {
    id, name, author, category,
  } = bookProps;

  const ApiBook = {
    item_id: id,
    name: `${name}`,
    author: `${author}`,
    category: `${category}`,
  };
  booksApi.addBooksToApi(ApiBook).then(() => dispatch(addBook(bookProps)));
};

export const removeBooksAsync = (id) => (dispatch) => {
  booksApi.deleteBooksFromApi(id).then(() => dispatch(removeBook(id)));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_BOOKS:
      return action.payload;

    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default bookReducer;
