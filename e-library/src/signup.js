import React from 'react';
import './App.css'
import { Form2 } from './components/forms/input';
import Header from './components/homepage/header';

const Signup = () => {
    return (
        <div className="App">
            <Header/>
            <div class="form">
                <Form2 />
            </div>
        </div>
    )
}
export default Signup;