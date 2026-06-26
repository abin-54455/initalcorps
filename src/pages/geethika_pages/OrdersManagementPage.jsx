import React, { useState } from 'react';
import ExeIndividualOrder from '../../components/geethika/ExeIndividualOrder';
import ExeManageOrders from '../../components/geethika/ExeManageOrders';

export default function OrdersManagementPage() {
  // Mock array data simulating incoming administrative database items
  const [orders, setOrders] = useState([
    {
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
    },
    {
      id: 'ORD002',
      title: 'GST Registration',
      tier: 'BASIC',
      client: 'Priya Sharma',
      email: 'priya@greenearth.in',
      phone: '+91 98123 45678',
      date: '2026-06-04',
      amount: '₹4,999',
      status: 'Review',
      notes: 'Documents uploaded for verification.'
    }
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
    console.log(`Updated Order ${orderId} status to: ${newStatus}`);
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      border: '1px solid #eef2f6',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Top Header Row Panel */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#113360' }}>Manage Orders</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '18px', color: '#8a9bb4' }}>⏳</span>
          <select style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #b9c3d0', backgroundColor: '#ffffff', color: '#113360', fontWeight: '600', outline: 'none' }}>
            <option>All Orders</option>
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Render list of separated structural components dynamically */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {orders.map(singleOrder => (
          <ExeIndividualOrder 
            key={singleOrder.id} 
            order={singleOrder} 
            onStatusChange={handleStatusChange} 
          />
        ))}
      </div>
    </div>
  );
}