import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import All Application Assets (Corrected paths out to root components folder)
import ExecutiveLogin from '../../components/geethika/ExecutiveLogin';
import ExecutivePortal from '../../components/geethika/ExecutivePortal';
import ExecutiveDashboard from '../../components/geethika/ExecutiveDashboard';
import ExeDashboardOverview from '../../components/geethika/ExeDashboardOverview';
import ExeTotalOrders from '../../components/geethika/ExeTotalOrders';
import ExeRecentOrders from '../../components/geethika/ExeRecentOrders';
import ExeDashIndividualOrders from '../../components/geethika/ExeDashIndividualOrders';
import ExeIndividualOrder from '../../components/geethika/ExeIndividualOrder';
import ExeProfileCard from '../../components/geethika/ExeProfileCard';
import ExeSummary from '../../components/geethika/ExeSummary';

export default function ComponentPreviewPage() {
  const { componentName } = useParams();
  const navigate = useNavigate();
  const [fakeLogin, setFakeLogin] = useState(false);

  const mockOrder = {
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

  const renderSelectedComponent = () => {
    switch (componentName) {
      case 'login':
        return <ExecutiveLogin onLoginSuccess={() => alert('Authenticated!')} />;
      case 'portal':
        // FIX: Changed navigate('/') to navigate(-1) so it respects the previous activity history stack
        return <ExecutivePortal onLogout={() => alert('Logged Out')} onBack={() => navigate(-1)} />;
      case 'sidebar':
        return <div style={{ width: '260px' }}><ExecutiveDashboard /></div>;
      case 'overview':
        return <ExeDashboardOverview />;
      case 'total-orders-card':
        return <ExeTotalOrders title="Total Orders" count={4} bgColor="#eef2f6" iconColor="#113360" icon="🛒" />;
      case 'recent-orders':
        return <ExeRecentOrders />;
      case 'dash-individual-order':
        return <ExeDashIndividualOrders title="Company Incorporation" client="Rajesh Kumar" date="2026-06-05" status="Pending" statusColors={{ bg: '#fff4eb', text: '#ff9933' }} />;
      case 'individual-order-card':
        return <ExeIndividualOrder order={mockOrder} onStatusChange={(id, status) => console.log(id, status)} />;
      case 'profile-card':
        return <ExeProfileCard />;
      case 'profile-summary':
        return <ExeSummary />;
      default:
        return <p style={{ color: 'red' }}>Component asset "{componentName}" missing from preview registry mapping.</p>;
    }
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
        <span style={{ fontSize: '13px', color: '#666', fontWeight: 'bold' }}>SANDBOX TARGET VIEW: {componentName}</span>
        <button onClick={() => navigate('/')} style={{ cursor: 'pointer', padding: '4px 12px' }}>Exit Preview</button>
      </div>
      {renderSelectedComponent()}
    </div>
  );
}