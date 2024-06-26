import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/logo.png';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={appLogo} alt="App Logo" />
          <span className='app-header'>Movie Watchlist</span>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/watchlist" className="nav-link">
            Watchlist
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/explore" className="nav-link">
            Explore Movies
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
