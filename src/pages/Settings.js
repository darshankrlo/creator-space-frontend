import React from "react";
import "../styles.css";

function Settings() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your account preferences.</p>
      </div>

      <div className="card">
        <h2>Account Settings</h2>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your@email.com" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>
        <button className="btn">Update Account</button>
      </div>

      <div className="card">
        <h2>Notifications</h2>
        <p>Email notifications are currently <strong>enabled</strong>.</p>
      </div>
    </div>
  );
}

export default Settings;