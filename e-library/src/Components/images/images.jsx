import React from 'react';
import useImageCover from '../hooks/imageCover';

const Images = () => {
  const {
    handleSubmit, inputChange, success, message,
  } = useImageCover();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h2>{message}</h2>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Upload your Image Cover</h2>
            <div className="input-box">
              <input type="file" onChange={inputChange} required />
            </div>
            <div className="input-box">
              <input type="submit" value="Create your book" />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Images;
