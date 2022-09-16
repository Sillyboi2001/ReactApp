import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Homepage from './Homepage';
import AddBook from './Createbook';
import RequireAuth from './counter/RequireAuth';
import GetBook from './Getbook';
import AddImage from './AddImage';
import GetNotReturnedBook from './ReturnBook';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<RequireAuth />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/borrowBook/:id" element={<GetBook />} />
        <Route path="/addImage/:id" element={<AddImage />} />
        <Route path="/returnbook" element={<GetNotReturnedBook />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
