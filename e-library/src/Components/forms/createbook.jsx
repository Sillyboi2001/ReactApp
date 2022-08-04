import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../api/axios";
import formData from 'form-data'
import { userInfo } from "../homepage/body";

export const bookData = {};

export const CreateBook = () => {
    const [book, setBook] = useState({
        title: '',
        price: '',
        author: '',
        description: '',
        fileUrl: '',
    })

    const redirect = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        const form = new formData()
        form.append('title', book.title)
        form.append('price', book.price)
        form.append('author', book.author)
        form.append('description', book.description)
        form.append('bookFile', book.fileUrl)
        try {
            const response = await axios.post('/api/books', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': userInfo.token,
                }
            });
            setBook({ title: ''});
            setBook({ price: ''});
            setBook({ author: ''});
            setBook({ fileUrl: ''});
            setBook({ description: ''})
            window.alert('Book has been created successfully')
            redirect('/homepage')
            bookData.img = response.data.createbook.imageUrl
            bookData.file = response.data.createbook.fileUrl
        } catch (err){
              if (err) {
                  window.alert('Failed to create book. Please try again')
                  redirect('/homepage')
                  console.log(err)
            }
        }
    }
        return(
            <>      
               <div> 
                    <form onSubmit={submit}>
                        <h2>Create your book</h2><div className="input-box">
                            <input type="text" value={book.title} placeholder="Title" onChange={(e) => setBook({ ...book, title: e.target.value})} />
                        </div><div className="input-box">
                            <textarea placeholder="Description" value={book.description} rows="4" columns="50" onChange={(e) => setBook({ ...book, description: e.target.value})}></textarea>
                        </div><div className="input-box">
                            <input type="text" placeholder="Author" value={book.author} onChange={(e) => setBook({ ...book, author: e.target.value})} />
                        </div><div className="input-box">
                            <input type="text" placeholder="Price" value={book.price} onChange={(e) => setBook({ ...book, price: e.target.value})} />
                        </div><div className="input-box">
                            <input type="file" onChange={(e) => setBook({...book, fileUrl: e.target.files[0]})} required />
                        </div><div className="input-box">
                            <input type="submit" value="Create your book" />
                        </div>
                    </form>
                </div>
            </>
        )    
}
