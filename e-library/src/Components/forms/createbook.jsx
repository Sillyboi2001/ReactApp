import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "../api/axios";
import formData from 'form-data'
import { token } from './input';

const CreateBook = () => {;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [author, setAuthor] = useState('');
    const [fileUrl, setFileUrl] = useState(null)
    const [description, setDescription] = useState('')

    const redirect = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        const form = new formData()
        form.append('title', title)
        form.append('price', price)
        form.append('author', author)
        form.append('description', description)
        form.append('bookFile', fileUrl)
        try {
            const response = await axios.post('/api/books', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'authorization': token.id
                }
            });
            setTitle('');
            setPrice('');
            setFileUrl('');
            setAuthor('');
            setDescription('');
            window.alert('Book has been created successfully')
            redirect('/homepage')
            console.log(response.data)
        } catch (err){
              if (err) {
                  window.alert('Failed to create book. Please try again')
                  redirect('/homepage')
            }
        }
    }
        return(
            <>      
               <div> 
                    <form onSubmit={submit}>
                        <h2>Create your book</h2><div className="input-box">
                            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                        </div><div className="input-box">
                            <textarea placeholder="Description" value={description} rows="4" columns="50" onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div><div className="input-box">
                            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div><div className="input-box">
                            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div><div className="input-box">
                            <input type="file" onChange={(e) => setFileUrl(e.target.files[0])} />
                        </div><div className="input-box">
                            <input type="submit" value="Create your book" />
                        </div>
                    </form>
                </div>
            </>
        )    
}

export default CreateBook