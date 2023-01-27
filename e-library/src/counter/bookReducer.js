import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    notreturned: [],
  },
  reducers: {
    getbooks: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.books = action.payload;
    },
    booknotreturned: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.notreturned = action.payload;
    },
  },
});

export const { getbooks, booknotreturned } = bookSlice.actions;

export default bookSlice.reducer;

export const bookunreturned = (state) => state.book.notreturned;
