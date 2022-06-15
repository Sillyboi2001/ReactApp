import React from "react";
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
    return(
        <div class="container">
            <header class="head">E-LIBRARY</header>
            <div class="search"><input type="text" placeholder="Search..."/></div>
            <div class="dropdown">
                <button class="dropbtn">Silasmanas</button>
                <div class="dropdown-content">
                    <Link to="./profile.html">My profile</Link>
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