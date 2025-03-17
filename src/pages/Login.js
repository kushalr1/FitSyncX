import React, { useState } from 'react';
import '../styles/login.css';
import { useAuth } from '../store/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const {login} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login({ email, password });
      
      if (response.success) {
        console.log("Login successful:", response);
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };
  

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Logo and Header */}
        <div className="login-header">
          <div className="logo-container">
            {/* icon here */}
          </div>
          <h2 className="welcome-text">Welcome Back</h2>
          {/* <p className="subtitle">Sign in to your account</p> */}
        </div>

        {/* Login Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot your password?</a>
            </div>
          </div>

          <div className="button-container">
            <button type="submit" className="login-button">Sign in</button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-text">Or continue with</div>
          <div className="divider-line"></div>
        </div>

        <div className="social-login">
        <a href="#" className="social-button">
          <svg className="social-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>

        <a href="#" className="social-button">
          <svg className="social-icon google" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" fill="#4285F4"/>
          </svg>
        </a>
      </div>

        {/* Sign Up Link */}
        <div className="signup-link">
          <p>
            Don't have an account?{' '}
            <a href="/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;