import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);
const navbarRef = useRef(null);

const toggleMenu = () => {
setIsMenuOpen(!isMenuOpen);
};

const handleClickOutside = (event) => {
if (navbarRef.current && !navbarRef.current.contains(event.target)) {
setIsMenuOpen(false);
}
};
return (
<>
  <nav className={`navbar ${isMenuOpen ? 'open' : '' }`}>
    <button className="hamburger" onClick={toggleMenu}>
      Menu
      <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
    <ul className="nav-items">
      <li>
        <Link to="/profile">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  </nav>
  { isMenuOpen && (
  <div className="modal-overlay" onClick={handleClickOutside}>
    <div className={`modal-container ${isMenuOpen ? 'open' : '' }`} ref={navbarRef}>
      <div className="modal-header">
        <h3>Navigation</h3>
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            Close Menu
            <path
              d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
        </button>
      </div>
      <nav className="modal-nav">
        <ul onClick={toggleMenu}>
          <li>
            <Link to="/profile" onClick={toggleMenu}>Home</Link>
          </li>
          <span></span>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <span></span>
          <li>
            <Link to="/articles" onClick={toggleMenu}>Articles</Link>
          </li>
          <span></span>
          <li>
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
  }
</>
);
}
export default Navbar;
