import React from 'react';
import ExeDashIndividualOrders from './ExeDashIndividualOrders';

export default function ExeRecentOrders() {
  const ordersList = [
    { title: 'Company Incorporation', client: 'Rajesh Kumar', date: '2026-06-05', status: 'Pending', colors: { bg: '#fff4eb', text: '#ff9933' } },
    { title: 'GST Registration', client: 'Priya Sharma', date: '2026-06-04', status: 'Review', colors: { bg: '#f3ebff', text: '#a855f7' } },
    { title: 'Trademark Registration', client: 'Arjun Mehta', date: '2026-06-03', status: 'Progress', colors: { bg: '#e8f0fe', text: '#1a73e8' } },
    { title: 'ISO Certification', client: 'Sneha Reddy', date: '2026-05-28', status: 'Completed', colors: { bg: '#e6f4ea', text: '#137333' } }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '100%'
    }}>
      <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#113360' }}>Recent Orders</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {ordersList.map((order, idx) => (
          <ExeDashIndividualOrders 
            key={idx} 
            title={order.title} 
            client={order.client} 
            date={order.date} 
            status={order.status} 
            statusColors={order.colors} 
          />
        ))}
      </div>
    </div>
  );
}