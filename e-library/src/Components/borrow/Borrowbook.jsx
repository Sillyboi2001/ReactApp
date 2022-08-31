import React from 'react';
import useBorrowBook from '../hooks/borrowBook';

const GetBookbyId = () => {
  const { bookid, selectbook } = useBorrowBook();
  return (
    <>
      <div className="container2">
        <div className="img">
          <img src={bookid.imageUrl} alt={bookid.title} />
          <button type="button" onClick={selectbook}>BORROW</button>
        </div>
      </div>
      <div className="container3">
        <p>
          Title:
          {bookid.title}
        </p>
      </div>
      <div className="container3">
        <p>
          About:
          {bookid.description}
        </p>
      </div>
      <div className="container3">
        <p>
          Price:
          {bookid.price}
        </p>
      </div>
      <div className="container3">
        <p>
          Owner:
          {bookid.author}
        </p>
      </div>
    </>
  );
};

export default GetBookbyId;
