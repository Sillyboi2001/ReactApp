import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../scss/homepage.scss';
import { userInfo } from './body';

const Navbar = () => (
  <div className="container">
    <header className="head">E-LIBRARY</header>
    <div className="search"><input type="text" className="search" placeholder="Search..." /></div>
    <div className="dropdown">
      <button type="button" className="dropbtn">{userInfo.username}</button>
      <div className="dropdown-content">
        <Link to="./profile.html">My profile</Link>
        <Link to="../addbook">Add a book</Link>
        <Link to="www.h.com">Inbox</Link>
        <Link to="www.h.com">Notifications</Link>
        <Link to="www.h.com">Help</Link>
        <Link to="www.h.com">Settings</Link>
        <Link to="/">Logout</Link>
      </div>
      <Outlet />
    </div>
  </div>
);

export default Navbar;
