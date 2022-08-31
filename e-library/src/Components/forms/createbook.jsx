import React from 'react';
import useBookInputField from '../hooks/useBookInputField';

const CreateBook = () => {
  const {
    formInput, fileInput, submit,
  } = useBookInputField();
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Create your book</h2>
        <div className="input-box">
          <input type="text" name="title" placeholder="Title" onChange={formInput} required />
        </div>
        <div className="input-box">
          <textarea placeholder="Description" name="description" rows="4" columns="50" onChange={formInput} required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Author" name="author" onChange={formInput} required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Price" name="price" onChange={formInput} required />
        </div>
        <div className="input-box">
          <input type="file" onChange={fileInput} required />
        </div>
        <div className="input-box">
          <input type="submit" value="Create your book" />
        </div>
      </form>
    </div>
  );
};

export default CreateBook;
