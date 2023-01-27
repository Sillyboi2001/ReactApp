import { useState } from 'react';
import FormData from 'form-data';
import axios from '../api/axios';
import { userInfo } from './useDisplayBooks';

const useBookInputField = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [book, setBook] = useState({
    title: '',
    price: '',
    author: '',
    description: '',
    fileUrl: '',
  });
  const formInput = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const fileInput = (e) => {
    setBook({ ...book, fileUrl: e.target.files[0] });
  };

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', book.title);
    form.append('price', book.price);
    form.append('author', book.author);
    form.append('description', book.description);
    form.append('bookFile', book.fileUrl);
    try {
      const response = await axios.post('/api/books', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: userInfo.token,
        },
      });
      setBook({
        title: '',
        price: '',
        author: '',
        description: '',
        fileUrl: '',
      });
      setMessage(response.data.message);
      setSuccess(true);
    } catch (err) {
      if (err) {
        setMessage('Failed to create book. Please try again');
        setSuccess(true);
      }
    }
  };
  return {
    formInput, fileInput, submit, success, message,
  };
};
export default useBookInputField;
