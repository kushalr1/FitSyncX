import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="notfound-btn">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
