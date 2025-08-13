import React, { useState, useEffect } from 'react';
import '../../styles/HeaderStyle.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Food_Assets/assets/logo/logo.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setIsSticky(window.scrollY > 100);
    }
    window.addEventListener('scroll', scroll);

    return () => window.removeEventListener('scroll', scroll);
  })

  return (
    <header>
      <nav className={isSticky ? "navbar navbar-expand-lg sticky" : "navbar navbar-expand-lg"}>
        <Link className="logo" to="/">
          <img
            src={logo}
            alt="Logo"
            height="30"
            className="img-fluid"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">OUR MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">SHOP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <i className="bi bi-bag"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
