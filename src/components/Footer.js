import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
return (
<div className="footer-section">
  <span className="lin-sep"></span>
  <footer>
    <div className="footer-div">
      <ul className="footer-items">
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/projects"> Projects</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/articles"> Article</Link>
        </li>
      </ul>
      <p> © 2024 Eyosias W. All rights reserved</p>
    </div>
  </footer>
</div>
);
}

export default Footer;
