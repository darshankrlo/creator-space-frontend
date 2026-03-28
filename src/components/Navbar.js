import React from "react";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      {/* TODO: Replace spans with Link/NavLink for routing */}
      <span style={{ marginRight: "10px" }}>Dashboard</span>
      <span style={{ marginRight: "10px" }}>Profile</span>
      <span>Settings</span>
    </nav>
  );
}

export default Navbar;
