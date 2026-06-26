import React from 'react';

export default function ExeIndividualOrder({ order, onStatusChange }) {
  // Safe fallback data so the card doesn't crash when viewed alone in preview mode
  const currentOrder = order || {
    id: 'ORD001',
    title: 'Company Incorporation',
    tier: 'PREMIUM',
    client: 'Rajesh Kumar',
    email: 'rajesh@techvista.ai',
    phone: '+91 98765 43210',
    date: '2026-06-05',
    amount: '₹12,999',
    status: 'Pending',
    notes: 'Client requested expedited processing.'
  };

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
      width: '100%',
      marginBottom: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.01)'
    }}>
      {/* Upper Row: Title, Tier tag, and Status dropdown selection */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#113360', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ffffff', flexShrink: 0 }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
            </svg>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#113360' }}>{currentOrder.title}</h4>
              <span style={{ fontSize: '11px', fontWeight: '700', backgroundColor: currentOrder.tier === 'PREMIUM' ? '#fff4eb' : '#e8f0fe', color: currentOrder.tier === 'PREMIUM' ? '#ff9933' : '#1a73e8', padding: '2px 8px', borderRadius: '4px' }}>{currentOrder.tier}</span>
            </div>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#8a9bb4' }}>Order ID: {currentOrder.id}</p>
          </div>
        </div>

        {/* Interactive Update Status dropdown */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', fontWeight: '600', color: '#8a9bb4' }}>Update Status</label>
          <select 
            value={currentOrder.status} 
            onChange={(e) => onStatusChange && onStatusChange(currentOrder.id, e.target.value)}
            style={{ padding: '8px 12px', borderRadius: '8px', border: '1px solid #b9c3d0', backgroundColor: '#ffffff', color: '#113360', fontWeight: '600', outline: 'none', cursor: 'pointer' }}
          >
            <option value="Pending">Pending</option>
            <option value="Review">Review</option>
            <option value="Progress">Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Details Grid Info Block */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '16px',
        borderTop: '1px dashed #eef2f6',
        borderBottom: '1px dashed #eef2f6',
        padding: '16px 0'
      }}>
        {[
          { label: 'Client Name', val: currentOrder.client },
          { label: 'Email', val: currentOrder.email },
          { label: 'Phone', val: currentOrder.phone },
          { label: 'Order Date', val: currentOrder.date },
          { label: 'Amount', val: currentOrder.amount, isPrice: true }
        ].map((info, idx) => (
          <div key={idx}>
            <span style={{ display: 'block', fontSize: '12px', color: '#8a9bb4', marginBottom: '4px' }}>{info.label}</span>
            <span style={{ fontSize: '14px', fontWeight: info.isPrice ? '700' : '500', color: info.isPrice ? '#137333' : '#113360' }}>{info.val}</span>
          </div>
        ))}
      </div>

      {/* Order Notes Field */}
      <div>
        <span style={{ display: 'block', fontSize: '12px', color: '#8a9bb4', marginBottom: '4px' }}>Notes</span>
        <p style={{ margin: 0, fontSize: '14px', color: '#55657e', lineHeight: '1.4' }}>{currentOrder.notes}</p>
      </div>
    </div>
  );
}