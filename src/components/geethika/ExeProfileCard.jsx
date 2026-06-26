import React from 'react';

export default function ExeProfileCard() {
  const profileDetails = [
    {
      label: 'Email Address',
      value: 'exec@initialcorps.in',
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      label: 'Mobile Number',
      value: '+91 98765 12345',
      icon: (
        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '32px 24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      border: '1px solid #eef2f6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start', // Forces all container items to align nicely to the left
      textAlign: 'left', // Ensures text aligns left
      gap: '24px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Profile Header (Avatar and Name) */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', width: '100%' }}>
        <div style={{
          width: '64px',
          height: '64px',
          backgroundColor: '#113360',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          flexShrink: 0
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#113360' }}>Amit Patel</h4>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#8a9bb4', fontWeight: '500' }}>Executive Officer</p>
        </div>
      </div>

      {/* Profile Info Rows (Email & Mobile) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'flex-start' }}>
        {profileDetails.map((detail, idx) => (
          <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', color: '#71829e' }}>{detail.label}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#113360' }}>
              <span style={{ color: '#71829e', display: 'flex', alignItems: 'center' }}>{detail.icon}</span>
              <span style={{ fontSize: '15px', fontWeight: '500' }}>{detail.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Account Role Badge */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start', width: '100%' }}>
        <span style={{ fontSize: '12px', fontWeight: '600', color: '#71829e' }}>Account Role</span>
        <div>
          <span style={{
            fontSize: '13px',
            fontWeight: '600',
            backgroundColor: '#eef2f6',
            color: '#113360',
            padding: '6px 14px',
            borderRadius: '20px',
            display: 'inline-block'
          }}>
            Executive Officer
          </span>
        </div>
      </div>
    </div>
  );
}