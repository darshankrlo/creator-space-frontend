import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-brand">🎨 CreatorSpace</span>
      <div className="navbar-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;