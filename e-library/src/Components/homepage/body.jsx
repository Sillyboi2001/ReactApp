import React from 'react';
import { useDisplayBook } from '../hooks/useDisplayBooks';
import useBookId from '../hooks/useBookId';

const Body = () => {
  const { book } = useDisplayBook();
  const { BookDetails, ImageDetails } = useBookId();
  return (
    <div className="container1">
      <div className="row">
        <h2>Top picks for you</h2>
        <div>Interesting books for all</div>
      </div>
      {book.map((item) => (
        <div className="img">
          <img src={item.imageUrl} alt="" />
          <button type="button" onClick={() => ImageDetails(item.id)}>ADD IMAGE</button>
          <button type="button" onClick={() => BookDetails(item.id)}>BORROW BOOK</button>
        </div>
      ))}
    </div>
  );
};

export default Body;
