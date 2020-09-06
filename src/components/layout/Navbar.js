import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ title, icons }) => {
  return (
    <div className="navbar-container">
     
        <Link to="/"  className="navbar-left-section">
        <div className="navbar-title">{title}</div>
        <div className="navbar-icon">
          <i className={icons}></i>
        </div>
        </Link>
      
      <div className="navbar-right-section">
        <div className="navbar-home-section">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-about-section">
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};
Navbar.defaultProps = {
  title: "Github User Finder",
  icons: "fab fa-github",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};
export default Navbar;
