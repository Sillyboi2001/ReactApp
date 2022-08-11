import React from 'react';
import './Components/scss/App.scss';
import { Form } from './Components/forms/input';

function Signin() {
  return (
    <div className="App">
      <div className="header">
        <header>E-LIBRARY</header>
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default Signin;
