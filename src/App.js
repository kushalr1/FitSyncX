// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from './router';

// Layout components
import MainLayout from './components/layout/MainLayout';
import AuthLayout from './components/layout/AuthLayout';

// Loading component for lazy loading
import LoadingSpinner from './components/common/LoadingSpinner';

// Context for authentication
import { AuthProvider, useAuth } from './store/AuthContext';

// PrivateRoute wrapper component
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Public routes with Auth Layout */}
            {publicRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <AuthLayout>
                    <route.component />
                  </AuthLayout>
                }
              />
            ))}
            
            {/* Private routes with Main Layout */}
            {privateRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute>
                    <MainLayout>
                      <route.component />
                    </MainLayout>
                  </PrivateRoute>
                }
              />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;