import React from 'react';
import MonthlyPercentage from './MonthlyPercentage';

export default function MonthlyAnalytics() {
  const analyticsData = [
    { month: 'Jan', revenue: '450K', orders: 45, percentage: 50 },
    { month: 'Feb', revenue: '520K', orders: 52, percentage: 58 },
    { month: 'Mar', revenue: '680K', orders: 68, percentage: 72 },
    { month: 'Apr', revenue: '750K', orders: 75, percentage: 80 },
    { month: 'May', revenue: '890K', orders: 89, percentage: 92 },
    { month: 'Jun', revenue: '920K', orders: 92, percentage: 96 }
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Monthly Analytics</h3>
      <div className="space-y-1">
        {analyticsData.map((row, index) => (
          <MonthlyPercentage 
            key={index} 
            month={row.month} 
            revenue={row.revenue} 
            orders={row.orders} 
            percentage={row.percentage}
          />
        ))}
      </div>
    </div>
  );
}