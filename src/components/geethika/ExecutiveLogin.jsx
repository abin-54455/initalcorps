import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExecutiveLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@initialcorps.in');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Added Router hook navigation hook system

  // Handle responsiveness for smaller screens
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };
    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    
    // Fire the login trigger function passed down from App.jsx
    if (onLoginSuccess) {
      onLoginSuccess();
    }
  };

  // Inline Styles object
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f6f9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      padding: isMobile ? '30px 20px' : '40px 40px',
      width: '100%',
      maxWidth: '440px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      boxSizing: 'border-box',
      textAlign: 'center',
    },
    iconContainer: {
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '64px',
      height: '64px',
      backgroundColor: '#113360',
      borderRadius: '12px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#113360',
      margin: '0 0 6px 0',
    },
    subtitle: {
      fontSize: '15px',
      color: '#8a9bb4',
      margin: '0 0 30px 0',
    },
    formGroup: {
      textAlign: 'left',
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#333333',
      marginBottom: '8px',
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      fontSize: '15px',
      backgroundColor: '#b9c3d0',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      outline: 'none',
      boxSizing: 'border-box',
    },
    togglePassword: {
      position: 'absolute',
      right: '16px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#71829e',
      padding: '0',
      display: 'flex',
      alignItems: 'center',
    },
    submitBtn: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#113360',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      marginTop: '10px',
      boxShadow: '0 4px 12px rgba(17, 51, 96, 0.2)',
    },
    backLink: {
      display: 'inline-block',
      marginTop: '28px',
      fontSize: '14px',
      color: '#71829e',
      textDecoration: 'none',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        html, body, #root {
          margin: 0;
          padding: 0;
          width: 100% !important;
          max-width: 100% !important;
          min-height: 100vh;
          background-color: #f4f6f9 !important;
        }
      `}</style>

      <div style={styles.card}>
        <div style={styles.iconContainer}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>

        <h2 style={styles.title}>Executive Portal</h2>
        <p style={styles.subtitle}>InitialCorps Legal</p>

        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email Address</label>
            <div style={styles.inputWrapper}>
              <style>{`::placeholder { color: rgba(255,255,255,0.7); }`}</style>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                placeholder="admin@initialcorps.in"
                required
              />
            </div>
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.togglePassword}
                aria-label="Toggle password visibility"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </button>
            </div>
          </div>

          <button type="submit" style={styles.submitBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
            Login to Executive Portal
          </button>
        </form>

        {/* Updated from a standard link anchor target to return smoothly to the selection dashboard home view */}
        <span onClick={() => navigate('/')} style={styles.backLink}>
          Back to Website
        </span>
      </div>
    </div>
  );
}