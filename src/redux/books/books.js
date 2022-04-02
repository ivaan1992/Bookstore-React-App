import booksApi from '../../components/Api';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const SET_ALL_BOOKS = 'bookstore/books/SET_ALL_BOOKS';

const initialState = [
  /* {
    id: 1,
    name: 'The picture of Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    id: 2,
    name: 'Romeo & Juliet',
    author: 'Shakespeare',
  },
  {
    id: 3,
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
  }, */
];

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

export const setAllBooksFromAPI = (dispatch) => {
  booksApi.getBooksFromApi().then((data) => {
    const books = [];
    Object.entries(data).forEach(([id, info]) => {
      const { title: APItitle } = info[0];
      const [title, author] = APItitle.split('-');
      const newBook = {
        id,
        title,
        author,
      };
      books.push(newBook);
    });
    dispatch(setAllBooks(books));
  });
};

export const addBookAsync = (book) => (dispatch) => {
  const {
    id, title, author, category,
  } = book;
  const APIbook = {
    item_id: id,
    title: `${title} - ${author}`,
    category: `${category}`,
  };
  booksApi.addBooksToApi(APIbook).then(() => dispatch(addBook(book)));
};

export const removeBookAsync = (id) => (dispatch) => {
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
