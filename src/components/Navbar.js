import React from 'react';
import { Link } from 'react-router-dom';
import loginBg from '../images/logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
      <Link to="/" className="nav-logo">
          <img src={loginBg} alt="Logo" className="logo-image" />
          Digital Dustbin
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/customerlogin" className="nav-link">Customer Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/recyclerlogin" className="nav-link">Recycler Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
