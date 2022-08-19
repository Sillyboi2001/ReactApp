import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useSignin from '../hooks/useInput';
import useSignupForm from '../hooks/useSignup';

export const Form = () => {
  const {
    formChange,
    errMessage,
    handleSubmit,
    success,
    errRef,
  } = useSignin();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h1>You are logged in</h1>
          <br />
          <p><Link to="/homepage">Go to home</Link></p>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <p ref={errRef} className={errMessage ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMessage}</p>
            <h2>Sign in</h2>
            <div className="input-box">
              <i className="fas fa-envelope" aria-hidden="true" />
              <input type="email" name="email" placeholder="Email" onChange={formChange} required />
            </div>
            <div className="input-box">
              <i className="fa fa-unlock-alt" aria-hidden="true" />
              <input type="password" name="password" placeholder="Password" onChange={formChange} required />
            </div>
            <div className="input-box">
              <input type="submit" name="" value="Login" />
            </div>
            <Link to="/signup">Don&apos;t have an account? Sign up</Link>
            <Link to="#forgetPassword">Forget password?</Link>
          </form>
          <Outlet />
        </div>
      )}
    </>
  );
};

export const Form2 = () => {
  const {
    signUp, formChange, errMessage, success, errRef,
  } = useSignupForm();
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {success ? (
        <div>
          <h1>Profile created successfully</h1>
          <br />
          <p><Link to="/homepage">Go to home</Link></p>
        </div>
      ) : (
        <form onSubmit={signUp}>
          <p ref={errRef} className={errMessage ? 'errmsg' : 'offscreen'} aria-live="assertive">{errMessage}</p>
          <h2>Sign up</h2>
          <div className="input-box">
            <i className="fa fa-user" aria-hidden="true" />
            <input type="text" name="username" placeholder="Username" onChange={formChange} required />
          </div>
          <div className="input-box">
            <i className="fas fa-envelope" aria-hidden="true" />
            <input type="email" name="email" placeholder="Email" onChange={formChange} required />
          </div>
          <div className="input-box">
            <i className="fa fa-unlock-alt" aria-hidden="true" />
            <input type="password" name="password" placeholder="Password" onChange={formChange} required />
          </div>
          <div className="input-box">
            <input type="submit" value="Signup" />
          </div>
        </form>
      )}
    </>
  );
};
