import { useState } from 'react';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import { userInfo } from './useDisplayBooks';
import { bookId } from '../homepage/Body';

const useImageCover = () => {
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
      window.alert(response.data.message);
      redirect('/homepage');
    } catch (err) {
      window.alert('Failed to upload image');
    }
  };

  const inputChange = (e) => {
    setImage({ ...image, imageUrl: e.target.files[0] });
  };

  return { handleSubmit, inputChange };
};

export default useImageCover;
