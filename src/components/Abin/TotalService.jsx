import React from 'react';

export default function TotalService({ icon, title, value, iconBgClass = "bg-blue-50 text-blue-600" }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col flex-1 min-w-[150px]">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${iconBgClass}`}>
        {icon}
      </div>
      <span className="text-xs font-semibold text-slate-400 tracking-wide mb-1">{title}</span>
      <span className="text-2xl font-bold text-slate-800">{value}</span>
    </div>
  );
}