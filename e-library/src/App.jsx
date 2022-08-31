import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Homepage from './Homepage';
import AddBook from './Createbook';
import RequireAuth from './counter/RequireAuth';
import GetBook from './Getbook';
import AddImage from './addImage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<RequireAuth />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/borrowBook" element={<GetBook />} />
        <Route path="/addImage" element={<AddImage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
