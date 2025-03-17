import React from "react";
import { useAuth } from "../store/AuthContext";
import "../styles/Profile.css";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h2 className="profile-title">Your Profile</h2>
      {user ? (
        <div className="profile-card">
          <div className="profile-avatar">{user.name.charAt(0)}</div>
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username || "Not provided"}</p>
            <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>
            <p><strong>Role:</strong> {user.role || "Member"}</p>
            <p><strong>Joined Date:</strong> {user.joinedDate || "N/A"}</p>
          </div>
        </div>
      ) : (
        <p className="no-data-text">No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
