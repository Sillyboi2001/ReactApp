import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormData from 'form-data';
import axios from '../api/axios';
import { userInfo } from '../homepage/body';

export const bookData = {};

const useBookInputField = () => {
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
  const redirect = useNavigate();

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
      window.alert('Book has been created successfully');
      redirect('/homepage');
      bookData.file = response.data.createbook.fileUrl;
      bookData.id = response.data.createbook.id;
    } catch (err) {
      if (err) {
        window.alert('Failed to create book. Please try again');
        redirect('/homepage');
      }
    }
  };
  return {
    formInput, fileInput, submit,
  };
};
export default useBookInputField;
