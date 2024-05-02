import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="navbar-logo">
        <h1> Sumon Khan</h1>
      </div>

      <div className="navbar-link">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About Me
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
