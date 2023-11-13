import { createSlice } from '@reduxjs/toolkit';
// import data from '../../data/books.json';

const initialState = {
  booksList: []
};

export const booksSlice = createSlice({
  name: 'booksAction',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.booksList = state.booksList.filter((item) => item.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      state.tttt += action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// Second variant use state
// export const selectBooks = (state) => state.books.booksList;

export default booksSlice.reducer;
