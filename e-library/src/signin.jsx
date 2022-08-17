import React from 'react';
import './Components/scss/App.scss';
import { Form } from './Components/forms/input';

const Signin = () => (
  <div className="App">
    <div className="header">
      <header>E-LIBRARY</header>
    </div>
    <div className="form">
      <Form />
    </div>
  </div>
);

export default Signin;
