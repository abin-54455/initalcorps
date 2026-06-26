import React from 'react';
import ExeDashboardOverview from '../../components/geethika/ExeDashboardOverview';
import ExeRecentOrders from '../../components/geethika/ExeRecentOrders';

export default function DashboardViewPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', boxSizing: 'border-box' }}>
      <ExeDashboardOverview />
      <ExeRecentOrders />
    </div>
  );
}