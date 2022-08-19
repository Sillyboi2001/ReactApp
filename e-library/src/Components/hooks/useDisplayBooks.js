import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { getbooks } from '../../counter/bookReducer';

const userInfo = JSON.parse(localStorage.getItem('user-info'));

const useDisplayBook = () => {
  const [book, setBook] = useState([]);
  const dispatch = useDispatch();
  dispatch(getbooks(book));

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('api/books', {
          headers: {
            authorization: userInfo.token,
          },
        });
        return setBook(response.data.books);
      } catch (err) {
        return err;
      }
    };
    getBooks();
  }, []);
  return { book };
};

export { userInfo, useDisplayBook };
