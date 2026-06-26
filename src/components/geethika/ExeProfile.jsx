import React from 'react';
import ExeProfileCard from './ExeProfileCard';
import ExeSummary from './ExeSummary';

export default function ExeProfile() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
      <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#113360' }}>My Profile</h2>
      <ExeProfileCard />
      <ExeSummary />
    </div>
  );
}