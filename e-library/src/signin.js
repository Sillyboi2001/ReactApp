import { Outlet, Link } from 'react-router-dom';
import './App.css';

const Signin = () => {
  return (
    <div className="App">
      <div className="header">
        <header>E-LIBRARY</header>
      </div>
      <div className="form">
        <form>
            <h2>Sign in</h2>
            <div className="input-box">
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <input type="email" name="" placeholder="Email" />
            </div>
            <div className="input-box">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                <input type="password" name="" placeholder="Password" />
            </div>
            <div className="input-box">
                <input type="submit" name="" value="Login" />
            </div>
            <Link to="/signup">Don't have an account? Sign up</Link>
            <Link to='#forgetPassword'>Forget password?</Link>
        </form>
        <Outlet/>
      </div>
    </div>
  );
}

export default Signin;
