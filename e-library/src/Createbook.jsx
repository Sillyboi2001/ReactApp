import React from 'react';
import './Components/scss/App.scss';
import { CreateBook } from './Components/forms/createbook';

const AddBook = () => (
  <div className="App">
    <div className="header">
      <header>E-LIBRARY</header>
    </div>
    <div className="form">
      <CreateBook />
    </div>
  </div>
);
export default AddBook;
