// src/store/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';
import { getToken, saveToken, removeToken, getUser, saveUser } from '../utils/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = getToken();
      if (token) {
        try {
          const userData = getUser();
          setUser(userData);
          setIsAuthenticated(true);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          logout();
        }
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    try {
      let response;
      if(credentials.email=="kushalsharma7092@gmail.com" && credentials.password == "12345"){
        response={
          token: "dummy",
          user: {
            name: "Kushal Sharma",
            email: "kushalsharma7092@gmail.com",
            username: "kushalsharma",
            phone: "+9194XXXXXXXX",
            role: "admin",
            joinedDate: "5 March, 2025"
          }
        }
      }
      // const response = await authService.login(credentials);
      if (response.token && response.user) {
        saveToken(response.token);
        saveUser(response.user);
        setIsAuthenticated(true);
        setUser(response.user);
        return { success: true };
      }
      return { success: false, error: 'Invalid login response' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = { isAuthenticated, user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
