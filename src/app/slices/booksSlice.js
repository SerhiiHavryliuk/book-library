import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { showNotify } from '../../utils/functions';
// import data from '../../data/books.json';

const initialState = {
  booksList: [],
  isLoadingViaAPI: false
};

export const fetchBooks = createAsyncThunk('books/fetchBook', async (url, thunkAPI) => {
  try {
    const res = await axios.get('https://peach-angler-fez.cyclic.app/api/books');
    return res.data;
  } catch (error) {
    console.log(error.message);
    // thunkAPI.dispatch(setError(error.message));
    // OPTION 1
    return thunkAPI.rejectWithValue(error);
    // // OPTION 2
    // throw error
  }
});

export const deleteBookFromDB = createAsyncThunk('books/deleteBook', async (id, thunkAPI) => {
  try {
    const res = await axios.delete(`https://peach-angler-fez.cyclic.app/api/books/${id}`);
    thunkAPI.dispatch(fetchBooks());
    return res.data;
  } catch (error) {
    console.log(error.message);
    // thunkAPI.dispatch(setError(error.message));
    // OPTION 1
    return thunkAPI.rejectWithValue(error);
    // // OPTION 2
    // throw error
  }
});

export const addBookFromDB = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  try {
    const res = await axios.post('https://peach-angler-fez.cyclic.app/api/books', book);
    thunkAPI.dispatch(fetchBooks());
    return res.data;
  } catch (error) {
    console.log(error.message);
    return thunkAPI.rejectWithValue(error);
  }
});

export const booksSlice = createSlice({
  name: 'booksAction',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    deleteBook: (state, action) => {
      // state.booksList = state.booksList.filter((item) => item.id !== action.payload);
      console.log('delete book');
      console.log(state, action.payload);
    },
    toggleFavorite: (state, action) => {
      state.booksList = state.booksList.map((item) => {
        if (item.id === action.payload) {
          item.isFavorite = !item.isFavorite;
        }
        return item;
      });
    },
    fetchAllBook: (state, action) => {
      state.booksList = action.payload;
    }
  },
  extraReducers: {
    // fetchBooks ---------------------------------------------------
    [fetchBooks.pending]: (state) => {
      console.log('pending --- fetchBooks');
      state.isLoadingViaAPI = true;
    },
    [fetchBooks.fulfilled]: (state, action) => {
      console.log('fulfilled --- fetchBooks');
      state.isLoadingViaAPI = false;
      if (state.booksList.length === 0) {
        state.booksList = state.booksList.concat(action.payload);
      }
    },
    [fetchBooks.rejected]: (state) => {
      console.log('rejected');
      state.isLoadingViaAPI = false;
    },

    // deleteBookFromDB ---------------------------------------------------
    [deleteBookFromDB.pending]: (state) => {
      console.log('pending --- deleteBookFromDB');
      state.isLoadingViaAPI = true;
    },
    [deleteBookFromDB.fulfilled]: (state, action) => {
      console.log('fulfilled --- deleteBookFromDB');
      state.isLoadingViaAPI = false;

      // Якщо видалення успішне, оновлюємо список книг
      state.booksList = state.booksList.filter((book) => book.id !== action.payload.id);
      showNotify('Success delete');
    },
    [deleteBookFromDB.rejected]: (state) => {
      console.log('rejected --- deleteBookFromDB');
      state.isLoadingViaAPI = false;
      showNotify('Error add new book');
    },

    // addBookFromDB ---------------------------------------------------
    [addBookFromDB.pending]: (state) => {
      console.log('pending --- addBookFromDB');
      state.isLoadingViaAPI = true;
    },
    [addBookFromDB.fulfilled]: (state, action) => {
      console.log('fulfilled --- addBookFromDB');
      state.isLoadingViaAPI = false;
      state.booksList.push(action.payload);
      showNotify('Success add new book');
    },
    [addBookFromDB.rejected]: (state) => {
      console.log('rejected --- addBookFromDB');
      state.isLoadingViaAPI = false;
      showNotify('Error add new book');
    }
  }
});

// Action creators are generated for each case reducer function
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

// Second variant use state
// export const selectBooks = (state) => state.books.booksList;

export default booksSlice.reducer;
