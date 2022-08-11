import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'auth',
  initialState: {
    username: '',
    token: '',
  },
  reducers: {
    username: (state, action) => {
      state.username = action.payload;
    },
    credentials: (state, action) => {
      state.token = action.payload;
    },
    logOut: (state, action) => {
      state.username = null;
      state.token = null;
    }
  }
});

export const { username, credentials, logOut } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCurrentUser = (state) => state.user.username;
export const selectCurrentToken = (state) => state.user.token;
