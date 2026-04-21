import React from "react";
import "../styles.css";

function Profile() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>👤 My Profile</h1>
        <p>Manage your public profile information.</p>
      </div>

      <div className="card">
        <h2>Profile Details</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="@username" />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea rows="3" placeholder="Tell the world about yourself..." />
        </div>
        <button className="btn">Save Changes</button>
      </div>
    </div>
  );
}

export default Profile;