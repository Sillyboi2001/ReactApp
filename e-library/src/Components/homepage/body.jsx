import React from 'react';
import { useDisplayBook } from '../hooks/useDisplayBooks';

const Body = () => {
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
          <button type="button">BORROW</button>
        </div>
      ))}
    </div>
  );
};

export default Body;
