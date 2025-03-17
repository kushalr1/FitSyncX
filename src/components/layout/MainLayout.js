import React from 'react';
import Sidebar from '../features/Sidebar';
import Header from '../features/Header';
import '../../styles/mainLayout.css';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="main-container">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
