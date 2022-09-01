import React from 'react';
import useBorrowBook from '../hooks/borrowBook';

const GetBookbyId = () => {
  const { book, selectbook } = useBorrowBook();
  return (
    <>
      <div className="container2">
        <div className="img">
          <img src={book.imageUrl} alt={book.title} />
          <button type="button" onClick={selectbook}>BORROW</button>
        </div>
      </div>
      <div className="container3">
        <p>
          Title:
          {book.title}
        </p>
      </div>
      <div className="container3">
        <p>
          About:
          {book.description}
        </p>
      </div>
      <div className="container3">
        <p>
          Price:
          {book.price}
        </p>
      </div>
      <div className="container3">
        <p>
          Owner:
          {book.author}
        </p>
      </div>
    </>
  );
};

export default GetBookbyId;
