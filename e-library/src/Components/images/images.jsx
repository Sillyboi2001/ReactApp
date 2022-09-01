import React from 'react';
import useImageCover from '../hooks/imageCover';

const Images = () => {
  const { handleSubmit, inputChange } = useImageCover();

  return (
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
  );
};

export default Images;
