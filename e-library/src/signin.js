import React from 'react';
import './App.css';
import { Form } from './components/forms/input';

const Signin = () => {
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
