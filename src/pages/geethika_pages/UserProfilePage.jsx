import React from 'react';
import ExeProfileCard from '../../components/geethika/ExeProfileCard';
import ExeSummary from '../../components/geethika/ExeSummary';

export default function UserProfilePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
      <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#113360', textAlign: 'left' }}>
        My Profile
      </h2>
      <ExeProfileCard />
      <ExeSummary />
    </div>
  );
}