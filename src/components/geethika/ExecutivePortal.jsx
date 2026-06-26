import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExecutivePortal({ onLogout, onBack }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (typeof onBack === 'function') {
      // If a custom parent callback handler exists (like in ComponentPreviewPage)
      onBack();
    } else {
      // Otherwise fallback to popping the historic router track
      navigate(-1);
    }
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: '16px 24px',
      borderBottom: '1px solid #eef2f6',
      boxSizing: 'border-box',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '200px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          backgroundColor: '#113360',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#113360' }}>Executive Portal</h1>
          <p style={{ margin: 0, fontSize: '12px', color: '#71829e' }}>Welcome, Amit Patel</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto' }}>
        <button 
          onClick={handleBackClick} 
          style={{ background: 'none', border: 'none', color: '#113360', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: '500' }}
        >
          ← Back
        </button>
        <button onClick={onLogout} style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
          Logout
        </button>
      </div>
    </header>
  );
}