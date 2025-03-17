import React from 'react';
import { useAuth } from '../../store/AuthContext';
import '../../styles/header.css';

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="header">
      <h1 className="header-title">Dashboard</h1>
      <div className="header-user">
        <span>Welcome, {user?.name || 'Member'}</span>
        <div className="header-avatar">
          {user?.name ? user.name.charAt(0).toUpperCase() : 'M'}
        </div>
      </div>
    </header>
  );
};

export default Header;
