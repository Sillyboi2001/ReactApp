import React from 'react';
import useUnreturnedBook from '../hooks/useUnreturnedBook';

const ReturnBook = () => {
  const {
    readBook, handleSubmit, displaybook, success, message,
  } = useUnreturnedBook();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h2>{message}</h2>
        </div>
      ) : (
        <div className="container4">
          <div className="row">
            <h2>Borrowed books</h2>
          </div>
          {displaybook.map((item) => (
            <div className="img">
              <img src={item.imageUrl} alt="" />
              <p>{item.title}</p>
              <button type="button" onClick={() => readBook(item.fileUrl)}>Read Book</button>
              <button type="button" onClick={(e) => handleSubmit(e, item.id)}>Return Book</button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ReturnBook;
