import React from 'react';

export default function ExeTotalOrders({ title, count, icon, bgColor, iconColor }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '20px',
      flex: '1 1 200px',
      minWidth: '140px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        backgroundColor: bgColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: iconColor,
        flexShrink: 0
      }}>
        {icon}
      </div>
      <div>
        <p style={{ margin: 0, fontSize: '13px', color: '#8a9bb4', fontWeight: '500', whiteSpace: 'nowrap' }}>{title}</p>
        <h3 style={{ margin: '4px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#113360' }}>{count}</h3>
      </div>
    </div>
  );
}