import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/reducer';
import bookReducer from '../counter/bookReducer';

export default configureStore({
  reducer: {
    user: counterReducer,
    book: bookReducer,
  },
});
