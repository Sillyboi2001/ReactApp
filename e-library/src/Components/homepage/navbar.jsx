import React from "react";
import { Link, Outlet } from 'react-router-dom';
import {token} from '../forms/input'
import '../scss/homepage.scss'

function Navbar() {
    return(
        <div class="container">
            <header class="head">E-LIBRARY</header>
            <div class="search"><input type="text" className="search" placeholder="Search..."/></div>
            <div class="dropdown">
                <button class="dropbtn">{token.username}</button>
                <div class="dropdown-content">
                    <Link to="./profile.html">My profile</Link>
                    <Link to="../addbook">Add a book</Link>
                    <Link to="#">Inbox</Link>
                    <Link to="#">Notifications</Link>
                    <Link to="#">Help</Link>
                    <Link to="#">Settings</Link>
                    <Link to="../index.html">Logout</Link>
                </div>
                <Outlet/>
            </div>
        </div>    
    )
}

export default Navbar