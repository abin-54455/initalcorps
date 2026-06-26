import React from 'react';
import ExeTotalOrders from './ExeTotalOrders';

export default function ExeDashboardOverview() {
  const cards = [
    { title: 'Total Orders', count: 4, bgColor: '#eef2f6', iconColor: '#113360', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> },
    { title: 'Pending', count: 1, bgColor: '#fff4eb', iconColor: '#ff9933', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
    { title: 'In Progress', count: 1, bgColor: '#e8f0fe', iconColor: '#1a73e8', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
    { title: 'Completed', count: 1, bgColor: '#e6f4ea', iconColor: '#137333', icon: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
      <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#113360' }}>Dashboard Overview</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
        {cards.map((card, idx) => (
          <ExeTotalOrders key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}