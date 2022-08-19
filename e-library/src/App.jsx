import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Homepage from './Homepage';
import AddBook from './Createbook';
import RequireAuth from './counter/RequireAuth';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<RequireAuth />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/addbook" element={<AddBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
