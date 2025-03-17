import axios from 'axios';
import { getToken } from './auth';

// Ensure Promise support for older browsers
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Create Axios Instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error.response ? error.response.data : error);
  }
);

// Generic API Caller
export const apiRequest = async (method, url, data = {}, params = {}) => {
  try {
    const response = await api({ method, url, data, params });
    return response.data;
  } catch (error) {
    return { success: false, error: error.message || 'An error occurred' };
  }
};

export default api;
