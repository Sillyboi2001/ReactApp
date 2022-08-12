import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../api/axios';
import { getbooks } from '../../counter/bookReducer';

export const userInfo = JSON.parse(localStorage.getItem('user-info'));

function Body() {
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

  return (
    <div className="container1">
      <div className="row">
        <h2>Top picks for you</h2>
        <div>Interesting books for all</div>
      </div>
      {book.map((item) => (
        <div className="img">
          <img src={item.imageUrl} alt="" />
          <button type="button">BORROW</button>
        </div>
      ))}
    </div>
  );
}

export default Body;
