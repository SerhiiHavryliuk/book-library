import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  titleFilter: '',
  authorFilter: '',
  onlyFavoriteFilter: false
};

export const filterSlice = createSlice({
  name: 'filterAction',
  initialState,
  reducers: {
    filterByTitle: (state, action) => {
      state.titleFilter = action.payload;
    },
    filterByAuthor: (state, action) => {
      state.authorFilter = action.payload;
    },
    filterOnlyFavorite: (state, action) => {
      state.onlyFavoriteFilter = action.payload;
    },
    resetAllFilters: () => {
      return initialState;
    }
  }
});

// Action creators are generated for each case reducer function
export const { filterByTitle, filterByAuthor, filterOnlyFavorite, resetAllFilters } =
  filterSlice.actions;

export const selectTitleFilter = (state) => state.filtersBooks.titleFilter;
export const selectAuthorFilter = (state) => state.filtersBooks.authorFilter;
export const selectOnlyFavoriteFilter = (state) => state.filtersBooks.onlyFavoriteFilter;

export default filterSlice.reducer;
