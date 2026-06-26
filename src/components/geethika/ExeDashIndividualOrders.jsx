import React from 'react';

export default function ExeDashIndividualOrders({ title, client, date, status, statusColors }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      border: '1px solid #eef2f6',
      borderRadius: '12px',
      boxSizing: 'border-box',
      backgroundColor: '#ffffff',
      flexWrap: 'wrap',
      gap: '12px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          backgroundColor: '#113360',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff'
        }}>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
            <line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#113360' }}>{title}</h4>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#8a9bb4' }}>
            {client} • <span style={{ color: '#b5bfc9' }}>{date}</span>
          </p>
        </div>
      </div>

      <span style={{
        padding: '6px 14px',
        borderRadius: '20px',
        fontSize: '13px',
        fontWeight: '600',
        backgroundColor: statusColors?.bg || '#f4f6f9',
        color: statusColors?.text || '#71829e'
      }}>
        {status}
      </span>
    </div>
  );
}