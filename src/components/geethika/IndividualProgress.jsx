import React from 'react';

export default function IndividualProgress({ title, value, titleColor, valColor, bgColor }) {
  return (
    <div style={{
      backgroundColor: bgColor || '#f8fafc',
      borderRadius: '12px',
      padding: '16px 20px',
      flex: '1 1 200px',
      minWidth: '160px',
      boxSizing: 'border-box'
    }}>
      <span style={{ display: 'block', fontSize: '13px', color: titleColor || '#8a9bb4', fontWeight: '500', marginBottom: '8px' }}>{title}</span>
      <span style={{ fontSize: '24px', fontWeight: '700', color: valColor || '#113360' }}>{value}</span>
    </div>
  );
}