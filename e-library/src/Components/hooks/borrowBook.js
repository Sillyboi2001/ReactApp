import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../api/axios';
import { userInfo } from './useDisplayBooks';
import { bookId } from '../homepage/Body';
import { getbooks } from '../../counter/bookReducer';

const useBorrowBook = () => {
  const [book, setBook] = useState([]);
  const dispatch = useDispatch();
  dispatch(getbooks(book));
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`api/books/${bookId.id}`, {
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
        id: bookId.id,
        userId: userInfo.id,
      }, {
        headers: {
          authorization: userInfo.token,
        },
      });
      window.alert(response.data.message);
    } catch (err) {
      if (err.response.status === 400) {
        window.alert('This book has been borrowed');
      }
    }
  };
  return { book, selectbook };
};
export default useBorrowBook;
