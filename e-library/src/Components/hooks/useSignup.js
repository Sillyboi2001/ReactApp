import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';

const useSignupForm = () => {
  const errRef = useRef();
  const [inputField, setInputField] = useState({});
  const [errMessage, setErrMessage] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setErrMessage('');
  }, [inputField]);
  const formChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signup', {
        username: inputField.username,
        email: inputField.email,
        password: inputField.password,
      });
      setInputField({
        username: '',
        password: '',
        email: '',
      });
      setSuccess(true);
      localStorage.setItem('user-info', JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 409) {
        setErrMessage('User Already Exist. Please Login');
      } else {
        setErrMessage('Failed to create user');
      }
      errRef.current.focus();
    }
  };
  return {
    signUp, formChange, errMessage, success, errRef,
  };
};
export default useSignupForm;
