import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDisplayBook, userInfo } from './useDisplayBooks';
import axios from '../api/axios';
import { booknotreturned } from '../../counter/bookReducer';

const useUnreturnedBook = () => {
  const { book } = useDisplayBook();
  const [displayBooks, setDisplayBooks] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [returnBook, setReturnBook] = useState({
    bookId: '',
  });
  const dispatch = useDispatch();
  dispatch(booknotreturned(displayBooks));
  const notreturned = displayBooks.map((item) => item.bookId);
  const displaybook = book.filter((item) => notreturned.includes(item.id));

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`api/users/${userInfo.id}/books?bookReturned=false`, {
          headers: {
            authorization: userInfo.token,
          },
        });
        return setDisplayBooks(response.data.unreturnedBooks);
      } catch (err) {
        return err;
      }
    };
    getBooks();
  }, []);
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`api/users/${userInfo.id}/books`, { bookId: id }, {
        headers: {
          authorization: userInfo.token,
        },
      });
      setReturnBook({
        bookId: '',
      });
      setSuccess(true);
      setMessage(response.data.message);
    } catch (err) {
      setSuccess(true);
      setMessage('Failed to return book. Try again later');
    }
  };
  const readBook = (url) => {
    window.open(url);
  };
  return {
    returnBook, displaybook, handleSubmit, readBook, book, success, message,
  };
};

export default useUnreturnedBook;
