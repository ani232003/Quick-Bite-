import React, { useState, useEffect } from "react";
import "../../styles/HeaderStyle.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/Food_Assets/assets/logo/logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";

const Header = ({ user }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header>
      <nav className={isSticky ? "navbar navbar-expand-lg sticky" : "navbar navbar-expand-lg"}>
        <Link className="logo" to="/">
          <img src={logo} alt="Logo" height="30" className="img-fluid" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleLinkClick}>HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu" onClick={handleLinkClick}>OUR MENU</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop" onClick={handleLinkClick}>SHOP</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog" onClick={handleLinkClick}>BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleLinkClick}>CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/payment" onClick={handleLinkClick}>
                <i className="bi bi-bag"></i>
              </Link>
            </li>
            <li className="nav-item ms-3 me-3">
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
