import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import booksReducer from '../app/slices/booksSlice';
import filtersReducer from '../app/slices/filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    filtersBooks: filtersReducer
  }
});
