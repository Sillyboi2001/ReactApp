import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormData from 'form-data';
import axios from '../api/axios';
import { userInfo } from '../homepage/body';
import useCustomHooks from './useCustomhooks';

export const bookData = {};

export function CreateBook() {
  const [book, setBook] = useCustomHooks({});

  const formValue = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  const bookfile = (e) => {
    setBook({ ...book, [e.target.name]: e.target.files[0] });
  };
  const redirect = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('title', book.title);
    form.append('price', book.price);
    form.append('author', book.author);
    form.append('description', book.description);
    form.append('bookFile', book.fileUrl);
    try {
      const response = await axios.post('/api/books', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: userInfo.token,
        },
      });
      setBook({
        title: '',
        price: '',
        author: '',
        description: '',
        fileUrl: '',
      });
      window.alert('Book has been created successfully');
      redirect('/homepage');
      bookData.file = response.data.createbook.fileUrl;
      bookData.id = response.data.createbook.id;
    } catch (err) {
      if (err) {
        window.alert('Failed to create book. Please try again');
        redirect('/homepage');
        console.log(err);
      }
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <h2>Create your book</h2>
        <div className="input-box">
          <input type="text" value={book.title} name="title" placeholder="Title" onChange={formValue} />
        </div>
        <div className="input-box">
          <textarea placeholder="Description" value={book.description} name="description" rows="4" columns="50" onChange={formValue} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Author" value={book.author} name="author" onChange={formValue} />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Price" value={book.price} name="price" onChange={formValue} />
        </div>
        <div className="input-box">
          <input type="file" onChange={bookfile} required />
        </div>
        <div className="input-box">
          <input type="submit" value="Create your book" />
        </div>
      </form>
    </div>
  );
}
