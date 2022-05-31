import React, { Component } from "react";
import { Link, Outlet } from 'react-router-dom';

export class Form extends Component {
    render() {
        return(
            <div>
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
        )
    }
}

export class Form2 extends Component {
    render() {
        return(
            <form>
                   <h2>Sign up</h2>
                <div class="input-box">
                   <i class="fa fa-user" aria-hidden="true"></i>
                   <input type="text" name="" placeholder="Username"/>
                </div>
                <div class="input-box">
                   <i class="fas fa-envelope" aria-hidden="true"></i>
                   <input type="email" name="" placeholder="Email"/>
                </div>
                <div class="input-box">
                   <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                   <input type="password" name="" placeholder="Password"/>
                </div>
                <div class="input-box">
                   <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                   <input type="password" name="" placeholder="Confirm Password"/>
                </div>
                <div class="input-box">
                   <input type="submit" name="" value="Signup"/>
                </div>
                </form>
        )
    }
}
