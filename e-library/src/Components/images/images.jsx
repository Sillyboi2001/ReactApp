import React, { useState } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { userInfo } from '../hooks/useDisplayBooks';
import { bookId } from '../homepage/Body';

const Images = () => {
  console.log(bookId.id);
  const redirect = useNavigate();
  const [image, setImage] = useState({
    imageUrl: '',
  });
  const handleSubmit = async (e) => {
    const form = new FormData();
    form.append('img', image.imageUrl);
    e.preventDefault();
    try {
      const response = await axios.put(`api/books/${bookId.id}/imageCover`, form, {
        headers: {
          authorization: userInfo.token,
        },
      });
      setImage({
        imageUrl: '',
      });
      console.log(response);
      window.alert('Image upload successful');
      redirect('/homepage');
    } catch (err) {
      window.alert('Failed to upload image');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Upload your Image Cover</h2>
        <div className="input-box">
          <input type="file" onChange={(e) => setImage({ ...image, imageUrl: e.target.files[0] })} required />
        </div>
        <div className="input-box">
          <input type="submit" value="Create your book" />
        </div>
      </form>
    </div>
  );
};

export default Images;
