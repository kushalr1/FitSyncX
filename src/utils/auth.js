// src/utils/auth.js

export const TOKEN_KEY = 'gym-token';
export const USER_KEY = 'gym-user';

// Get token from localStorage
export const getToken = () => localStorage.getItem(TOKEN_KEY) || null;

// Save token to localStorage
export const saveToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

// Get user data from localStorage
export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

// Save user data to localStorage
export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
