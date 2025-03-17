import React from "react";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Membership Status</h3>
          <p>Active until: <strong>Dec 31, 2025</strong></p>
        </div>
        <div className="dashboard-card">
          <h3>Workout Sessions</h3>
          <p>Completed: <strong>42</strong></p>
        </div>
        <div className="dashboard-card">
          <h3>Upcoming Classes</h3>
          <p>Next Class: <strong>Yoga - Mar 20, 10:00 AM</strong></p>
        </div>
        <div className="dashboard-card">
          <h3>Attendance History</h3>
          <p>Last Check-in: <strong>Mar 15, 2025</strong></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
