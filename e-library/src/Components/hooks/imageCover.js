import { useState } from 'react';
import FormData from 'form-data';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { userInfo } from './useDisplayBooks';

const useImageCover = () => {
  const params = useParams();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState({
    imageUrl: '',
  });
  const handleSubmit = async (e) => {
    const form = new FormData();
    form.append('img', image.imageUrl);
    e.preventDefault();
    try {
      const response = await axios.put(`api/books/${params.id}/imageCover`, form, {
        headers: {
          authorization: userInfo.token,
        },
      });
      setImage({
        imageUrl: '',
      });
      setMessage(response.data.message);
      setSuccess(true);
    } catch (err) {
      setMessage('Failed to upload image');
      setSuccess(true);
    }
  };

  const inputChange = (e) => {
    setImage({ ...image, imageUrl: e.target.files[0] });
  };

  return {
    handleSubmit, inputChange, message, success,
  };
};

export default useImageCover;
