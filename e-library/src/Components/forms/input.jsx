import React, { useState, useEffect, useRef } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from '../api/axios';

export const Form = () => {   
    const userRef = useRef()
    const errRef = useRef()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [success, setSuccess] = useState(false)
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMessage('');
    }, [email, password])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
         const response = await axios.post('/api/users/signin', {email, password});
            setEmail('');
            setPassword('')
            setSuccess(true)
            localStorage.setItem('user-info', JSON.stringify(response.data))
        } catch (err ) {
            if (err.response.status === 400) {setErrMessage('User input required')}
            else if (err.response.status === 404) {setErrMessage('Invalid credentials')}
            else {
                setErrMessage("User doesn't exist. Please signup")
          }
        }  
        errRef.current.focus()
    }

    return(
        <>
        {success ? (
            <div>
                <h1>You are logged in</h1>
                <br />
                <p><Link to="/homepage">Go to home</Link></p>
            </div>
        ) : (
        <div>
            <p ref={errRef} className={errMessage ? 'errmsg' : 'offscreen'} aria-live='assertive' >{errMessage}</p>
            <form onSubmit={handleSubmit}>
                <h2>Sign in</h2>
                <div className="input-box">
                    <i className="fas fa-envelope" aria-hidden="true"></i>
                    <input type="email" ref={userRef} value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-box">
                    <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                    <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="input-box">
                    <input type="submit" name="" value="Login"/>
                </div>
                <Link to="/signup">Don't have an account? Sign up</Link>
                <Link to='#forgetPassword'>Forget password?</Link>
            </form>
            <Outlet/>
        </div>
            )}
        </>
    )
}

export const Form2 = () => {
    const errRef = useRef()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMessage, setErrMessage] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setErrMessage('')
    }, [username, email, password])

    const signUp  = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/users/signup', {
            username,
            email,
            password})
            setUsername('')
            setEmail('')
            setPassword('')
            setSuccess(true)
            localStorage.setItem('user-info', JSON.stringify(response.data))
        } catch (err) {
            if (err.response.status === 409) {
                setErrMessage('User Already Exist. Please Login')
            }
            else{
                setErrMessage('Failed to create user')
            }
            errRef.current.focus()
        }
    }

    return(
        <>
        {success ? (
            <div>
                <h1>Profile created successfully</h1>
                <br />
                <p><Link to="/homepage">Go to home</Link></p>
            </div>
        ) : (
        <form onSubmit={signUp} >
            <p ref={errRef} className={errMessage ? 'errmsg' : 'offscreen'} aria-live='assertive' >{errMessage}</p>
            <h2>Sign up</h2>
            <div className="input-box">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" value={username} placeholder="Username" onChange={(e)=> setUsername(e.target.value)} required />
            </div>
            <div className="input-box">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="email" value={email} placeholder="Email" onChange={(e)=> setEmail(e.target.value)} required />
            </div>
            <div className="input-box">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                <input type="password" value={password} placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
            </div>
            <div className="input-box">
                <input type="submit" value="Signup"/>
            </div>
        </form>
        )}
        </>
    )
}
 