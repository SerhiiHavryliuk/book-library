import { createSlice } from '@reduxjs/toolkit';
import data from '../../data/books.json';

const initialState = {
  booksList: data
};

export const booksSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    deleteBook: (state) => {
      state.booksList -= 1;
    },
    toggleBook: (state, action) => {
      state.booksList += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addBook, deleteBook, toggleBook } = booksSlice.actions;

export default booksSlice.reducer;
