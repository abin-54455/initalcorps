import React from 'react';
import { SquarePen, Trash2 } from 'lucide-react';

const demoService = {
  title: 'Company Incorporation',
  description: 'Private Limited, LLP, OPC, Partnership',
  basicPrice: 6999,
  premiumPrice: 12999,
  timeline: '7-14 days',
  category: 'incorporation',
};

const IndividualServices = ({
  service = demoService,
  onEdit = () => {},
  onDelete = () => {},
}) => {
  const {
    title,
    description,
    basicPrice,
    premiumPrice,
    timeline,
    category,
  } = service;

  return (
    <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm flex items-start justify-between gap-4">
      
      <div className="space-y-3">
        <div>
          <h3 className="font-bold text-[#0f172a] text-base md:text-lg tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-0.5 font-normal">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <div className="text-slate-500">
            <span className="font-bold text-slate-700">Basic: </span>
            <span className="text-[#d97706] font-semibold">
              ₹{Number(basicPrice).toLocaleString('en-IN')}
            </span>
          </div>

          <div className="text-slate-500">
            <span className="font-bold text-slate-700">Premium: </span>
            <span className="text-[#d97706] font-semibold">
              ₹{Number(premiumPrice).toLocaleString('en-IN')}
            </span>
          </div>

          <div className="text-slate-500">
            <span className="font-bold text-slate-700">Timeline: </span>
            <span className="text-slate-600 font-medium">{timeline}</span>
          </div>

          <span className="bg-[#e2e8f0] text-[#64748b] text-xs font-semibold px-2.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-1">
        <button
          onClick={onEdit}
          className="text-blue-500 hover:text-blue-700 p-1 rounded transition-colors"
        >
          <SquarePen size={18} />
        </button>

        <button
          onClick={onDelete}
          className="text-red-400 hover:text-red-600 p-1 rounded transition-colors"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default IndividualServices;