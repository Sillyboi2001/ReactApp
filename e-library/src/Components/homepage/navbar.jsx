import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../scss/homepage.scss';
import { userInfo } from './body';

function Navbar() {
  return (
    <div className="container">
      <header className="head">E-LIBRARY</header>
      <div className="search"><input type="text" className="search" placeholder="Search..." /></div>
      <div className="dropdown">
        <button className="dropbtn">{userInfo.username}</button>
        <div className="dropdown-content">
          <Link to="./profile.html">My profile</Link>
          <Link to="../addbook">Add a book</Link>
          <Link to="#">Inbox</Link>
          <Link to="#">Notifications</Link>
          <Link to="#">Help</Link>
          <Link to="#">Settings</Link>
          <Link to="/">Logout</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
