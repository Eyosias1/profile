import React from "react";
import { Link } from "react-router-dom";
import "../styles/Articles.css";

function Articles() {
  return (
    <div className="article-section">
      <h1>Oops !</h1>
      <h2>404 - PAGE NOT FOUND. </h2>
      <h3>Soon ...🙃🫢🤫</h3>
      <p>There are no articles a the moment return to the home page.</p>
      <div className="link-button">
        <Link to="/profile"> Home</Link>
      </div>
    </div>
  );
}

export default Articles;
