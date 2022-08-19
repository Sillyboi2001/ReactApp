import React from 'react';
import './Components/scss/App.scss';
import Images from './Components/images/images';

const AddImage = () => (
  <div className="App">
    <div className="header">
      <header>E-LIBRARY</header>
    </div>
    <div className="form">
      <Images />
    </div>
  </div>
);

export default AddImage;
