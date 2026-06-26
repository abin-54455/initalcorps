import React from 'react';
import IndividualProgress from '../../components/geethika/IndividualProgress';

export default function ExeSummary() {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      border: '1px solid #eef2f6',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#113360' }}>Performance Summary</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
        <IndividualProgress title="Total Orders Handled" value="4" bgColor="#f8fafc" />
        <IndividualProgress title="Completed Orders" value="1" titleColor="#72947d" valColor="#137333" bgColor="#e6f4ea" />
        <IndividualProgress title="In Progress" value="1" titleColor="#7691b8" valColor="#1a73e8" bgColor="#e8f0fe" />
      </div>
    </div>
  );
}