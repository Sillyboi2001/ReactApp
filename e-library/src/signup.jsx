import React from 'react';
import './Components/scss/App.scss';
import { Form2 } from './Components/forms/input';
import Header from './Components/homepage/header';

const Signup = () => (
  <div className="App">
    <Header />
    <div className="form">
      <Form2 />
    </div>
  </div>
);
export default Signup;
