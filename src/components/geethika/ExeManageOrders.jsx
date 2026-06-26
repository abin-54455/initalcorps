import React, { useState } from 'react';

// Sub-Component 37: ExeIndividualOrder
export function ExeIndividualOrder({ order, onStatusChange }) {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #eef2f6',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#113360', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff', flexShrink: 0 }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#113360' }}>{order.title}</h4>
              <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: order.tier === 'PREMIUM' ? '#fff4eb' : '#e8f0fe', color: order.tier === 'PREMIUM' ? '#ff9933' : '#1a73e8', padding: '2px 8px', borderRadius: '4px' }}>{order.tier}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#8a9bb4' }}>Order ID: {order.id}</p>
          </div>
        </div>

        {/* Action Status Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#8a9bb4' }}>Update Status</label>
          <select 
            value={order.status} 
            onChange={(e) => onStatusChange(order.id, e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #b9c3d0', backgroundColor: '#ffffff', color: '#113360', fontWeight: '600', outline: 'none', cursor: 'pointer' }}
          >
            <option value="Pending">Pending</option>
            <option value="Review">Review</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Responsive Grid Details */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '16px',
        borderTop: '1px dashed #eef2f6',
        borderBottom: '1px dashed #eef2f6',
        padding: '16px 0'
      }}>
        {[
          { label: 'Client Name', val: order.client },
          { label: 'Email', val: order.email },
          { label: 'Phone', val: order.phone },
          { label: 'Order Date', val: order.date },
          { label: 'Amount', val: order.amount, isPrice: true }
        ].map((info, idx) => (
          <div key={idx}>
            <span style={{ display: 'block', fontSize: '12px', color: '#8a9bb4', marginBottom: '4px' }}>{info.label}</span>
            <span style={{ fontSize: '14px', fontWeight: info.isPrice ? '700' : '500', color: info.isPrice ? '#137333' : '#113360' }}>{info.val}</span>
          </div>
        ))}
      </div>

      {/* Notes block */}
      <div>
        <span style={{ display: 'block', fontSize: '12px', color: '#8a9bb4', marginBottom: '4px' }}>Notes</span>
        <p style={{ margin: 0, fontSize: '14px', color: '#55657e', lineHeight: '1.4' }}>{order.notes}</p>
      </div>
    </div>
  );
}

// Sub-Component 36: ExeManageOrders
export default function ExeManageOrders() {
  const [filter, setFilter] = useState('All');
  const [orders, setOrders] = useState([
    { id: 'ORD001', title: 'Company Incorporation', tier: 'PREMIUM', client: 'Rajesh Kumar', email: 'rajesh@techvista.ai', phone: '+91 98765 43210', date: '2026-06-05', amount: '₹12,999', notes: 'Client requested expedited processing', status: 'Pending' },
    { id: 'ORD002', title: 'GST Registration', tier: 'BASIC', client: 'Priya Sharma', email: 'priya@greenearth.in', phone: '+91 98123 45678', date: '2026-06-04', amount: '₹4,999', notes: 'Documents uploaded for verification', status: 'Review' }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
  };

  const filteredOrders = filter === 'All' ? orders : orders.filter(o => o.status === filter);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
      {/* View Title Header bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#113360' }}>Manage Orders</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#71829e" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #eef2f6', backgroundColor: '#ffffff', color: '#113360', fontWeight: '600', outline: 'none', cursor: 'pointer' }}
          >
            <option value="All">All Orders</option>
            <option value="Pending">Pending</option>
            <option value="Review">Review</option>
          </select>
        </div>
      </div>

      {/* Orders Item Grid List Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
        {filteredOrders.map(order => (
          <ExeIndividualOrder key={order.id} order={order} onStatusChange={handleStatusChange} />
        ))}
      </div>
    </div>
  );
}