import React from 'react';
import '../../styles/authLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Gym Membership</h2>
          <p className="auth-subtitle">Your fitness journey starts here</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;