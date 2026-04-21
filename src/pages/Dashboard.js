import React from "react";
import "../styles.css";

function Dashboard() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>👋 Welcome back, Creator!</h1>
        <p>Here's what's happening with your content today.</p>
      </div>

      <div className="stats-row">
        <div className="stat-card">
          <h3>12.4K</h3>
          <p>Total Followers</p>
        </div>
        <div className="stat-card">
          <h3>3.2K</h3>
          <p>Monthly Views</p>
        </div>
        <div className="stat-card">
          <h3>98</h3>
          <p>Posts Published</p>
        </div>
      </div>

      <div className="card">
        <h2>📈 Recent Activity</h2>
        <p>Your last post got 320 likes and 45 comments. Keep up the great work!</p>
      </div>

      <div className="card">
        <h2>🗓️ Upcoming Schedule</h2>
        <p>You have 2 posts scheduled for this week. Next post goes live on Friday.</p>
      </div>
    </div>
  );
}

export default Dashboard;