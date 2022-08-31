import React from 'react';
import { Link } from 'react-router-dom';
import { useDisplayBook } from '../hooks/useDisplayBooks';

export const bookId = {};

export const Body = () => {
  const { book } = useDisplayBook();
  return (
    <div className="container1">
      <div className="row">
        <h2>Top picks for you</h2>
        <div>Interesting books for all</div>
      </div>
      {book.map((item) => (
        <div className="img">
          <img src={item.imageUrl} alt="" />
          <Link to="/addImage" onClick={() => { bookId.id = item.id; }}>
            <button type="button">ADD IMAGE</button>
          </Link>
          <Link to="/borrowBook" onClick={() => { bookId.id = item.id; }}>
            <button type="button">BORROW</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
