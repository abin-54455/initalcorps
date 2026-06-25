import React from 'react';

export default function MonthlyPercentage({ month, revenue, orders, percentage }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-b border-slate-50 last:border-none text-xs font-medium text-slate-500">
      <div className="w-12 text-slate-400 font-bold uppercase">{month}</div>
      
      <div className="flex-1 mx-0 sm:mx-6 my-1 sm:my-0">
        <div className="flex justify-between text-[11px] mb-1">
          <span>Revenue: <strong className="text-slate-700">₹{revenue}</strong></span>
          <span>Orders: <strong className="text-slate-500">{orders}</strong></span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-amber-500 h-full rounded-full transition-all duration-500" 
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}