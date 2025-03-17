import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../store/AuthContext';
import '../../styles/sidebar.css'; 

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const navigation = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Profile', path: '/profile', icon: '👤' },
    { name: 'Membership Plans', path: '/membership-plans', icon: '🏋️' },
    { name: 'Workouts', path: '/workouts', icon: '💪' },
    { name: 'Class Schedule', path: '/class-schedule', icon: '📅' },
    { name: 'Attendance', path: '/attendance', icon: '📝' },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">GYM APP</div>
      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span>{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="sidebar-logout">
        <button onClick={logout}>
          <span>🚪</span> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
