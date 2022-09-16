import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { userInfo } from './useDisplayBooks';
import { getbooks } from '../../counter/bookReducer';

const useBorrowBook = () => {
  const [book, setBook] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const params = useParams();
  const dispatch = useDispatch();
  dispatch(getbooks(book));
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`api/books/${params.id}`, {
          headers: {
            authorization: userInfo.token,
          },
        });
        return setBook(response.data.item);
      } catch (err) {
        return err;
      }
    };
    getBooks();
  }, []);

  const selectbook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/users/${userInfo.id}/books`, {
        id: params.id,
        userId: userInfo.id,
      }, {
        headers: {
          authorization: userInfo.token,
        },
      });
      setMessage(response.data.message);
      setSuccess(true);
    } catch (err) {
      if (err.response.status === 400) {
        setSuccess(true);
        setMessage('This book has been borrowed by another user');
      }
    }
  };
  return {
    book, selectbook, success, message,
  };
};
export default useBorrowBook;
