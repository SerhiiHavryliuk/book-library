import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boosReducer from '../app/slices/booksSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: boosReducer
  }
});
