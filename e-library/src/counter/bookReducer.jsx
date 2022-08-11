import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    getbooks: (state, action) => {
      state.books = action.payload;
    },
  },
});

export const { getbooks } = bookSlice.actions;

export default bookSlice.reducer;
