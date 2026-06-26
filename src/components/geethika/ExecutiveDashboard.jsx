import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function ExecutiveDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/executive', icon: '⚙️' },
    { id: 'orders', label: 'Orders', path: '/executive/orders', icon: '🛒' },
    { id: 'profile', label: 'Profile', path: '/executive/profile', icon: '👤' }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px 16px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      border: '1px solid #eef2f6',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      boxSizing: 'border-box'
    }}>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600',
              textAlign: 'left',
              transition: 'all 0.2s ease',
              backgroundColor: isActive ? '#eef2f6' : 'transparent',
              color: isActive ? '#113360' : '#8a9bb4'
            }}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        );
      })}
    </div>
  );
}