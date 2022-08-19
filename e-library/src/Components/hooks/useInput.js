import { useState, useEffect, useRef } from 'react';
import axios from '../api/axios';

const useInput = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/signin', {
        email: inputField.email,
        password: inputField.password,
      });
      setInputField({
        email: '',
        password: '',
      });
      setSuccess(true);
      localStorage.setItem('user-info', JSON.stringify(response.data));
    } catch (err) {
      if (err.response.status === 400) {
        setErrMessage('User input required');
      } else if (err.response.status === 404) {
        setErrMessage('Invalid credentials');
      } else {
        setErrMessage("User doesn't exist. Please signup");
      }
    }
    errRef.current.focus();
  };
  return {
    formChange, errMessage, handleSubmit, success, errRef,
  };
};

export default useInput;
