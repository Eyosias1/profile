import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

function Navbar() {
return (
<nav className="navbar">
  <ul>
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
);
}

export default Navbar;
