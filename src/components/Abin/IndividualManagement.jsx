import React, { useState } from 'react';
import { User, X, Building2, Mail, Phone, Calendar, Wallet, FileText, MapPin } from 'lucide-react';

const IndividualManagementCard = ({ client, onStatusUpdate }) => {
  const {
    id,
    name,
    company,
    email,
    phone,
    joinedDate,
    services = [],
    totalSpent,
    status: initialStatus,
    address = "N/A",
    panNumber = "N/A",
    gstin = "N/A"
  } = client;

  const [status, setStatus] = useState(initialStatus);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = status?.toLowerCase() === 'active';

  const handleStatusToggle = () => {
    const nextStatus = isActive ? 'Inactive' : 'Active';
    setStatus(nextStatus);
    if (onStatusUpdate) {
      onStatusUpdate(id, nextStatus);
    }
  };

  return (
    <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        
        {/* Left Side: Avatar & Core Info */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-[#1e293b] rounded-full flex items-center justify-center flex-shrink-0 text-white">
            <User size={22} />
          </div>
          
          <div className="space-y-4 w-full">
            {/* Header: Name, Company & Status */}
            <div className="flex items-center gap-3 flex-wrap">
              <div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg">{name}</h3>
                <p className="text-sm text-gray-500 font-medium">{company}</p>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}>
                {status}
              </span>
            </div>

            {/* Grid details: Email, Phone, Joined Date */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">Email</span>
                <span className="text-gray-700 font-medium break-all font-mono">{email}</span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">Phone</span>
                <span className="text-gray-700 font-medium">{phone}</span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">Joined Date</span>
                <span className="text-gray-700 font-medium font-mono">{joinedDate}</span>
              </div>
            </div>

            {/* Services Used Tags */}
            <div>
              <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-1.5">Services Used</span>
              <div className="flex flex-wrap gap-1.5">
                {services?.map((service, index) => (
                  <span 
                    key={index} 
                    className="bg-slate-50 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded border border-slate-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Total Spent Amount */}
            <div>
              <span className="block text-gray-400 text-xs font-bold uppercase tracking-wider mb-0.5">Total Spent</span>
              <span className="text-lg font-bold text-[#16a34a]">
                ₹{Number(totalSpent).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100 justify-end">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold py-2 px-4 rounded-md shadow transition-colors text-center w-full md:w-32"
          >
            View Details
          </button>
          <button
            onClick={handleStatusToggle}
            className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 text-xs font-bold py-2 px-4 rounded-md shadow-sm transition-colors text-center w-full md:w-32"
          >
            {isActive ? 'Deactivate' : 'Activate'}
          </button>
        </div>

      </div>

      {/* --- RESPONSIVE MODAL COMPONENT OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto bg-slate-900/40 backdrop-blur-[2px]">
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-700">
                  <User size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{name}</h3>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Client Profile Dossier</p>
                </div>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content Details Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto text-sm">
              
              {/* Grid 1: Company & Money Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-start gap-3">
                  <Building2 size={18} className="text-[#d99443] mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Corporate Entity</span>
                    <span className="font-bold text-slate-700">{company}</span>
                  </div>
                </div>
                <div className="bg-emerald-50/30 p-4 rounded-lg border border-emerald-100/50 flex items-start gap-3">
                  <Wallet size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-emerald-600/70 uppercase tracking-wide">Total Billings</span>
                    <span className="font-bold text-emerald-700 text-base">₹{Number(totalSpent).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>

              {/* Grid 2: Core Contact Particulars */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1">Contact Parameters</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-medium text-slate-700">
                  <div className="flex items-center gap-2"><Mail size={16} className="text-slate-400" /><span className="font-mono">{email}</span></div>
                  <div className="flex items-center gap-2"><Phone size={16} className="text-slate-400" /><span>{phone}</span></div>
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-slate-400" /><span>Registered On: <span className="font-mono">{joinedDate}</span></span></div>
                </div>
              </div>

              {/* Grid 3: Compliance & Tax IDs */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1">Taxation & Legal Identifiers</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border border-slate-100 p-3 rounded-md bg-slate-50/50">
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">PAN Card Number</span>
                    <span className="font-mono font-bold text-slate-700 uppercase tracking-wide">{panNumber}</span>
                  </div>
                  <div className="border border-slate-100 p-3 rounded-md bg-slate-50/50">
                    <span className="block text-xs font-bold text-slate-400 mb-0.5">GSTIN Registration</span>
                    <span className="font-mono font-bold text-slate-700 uppercase tracking-wide">{gstin}</span>
                  </div>
                </div>
              </div>

              {/* Grid 4: Full Registered Office Address */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-1">Registered Address</h4>
                <div className="flex gap-2 text-slate-600 font-medium leading-relaxed">
                  <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                  <p>{address}</p>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-4 bg-slate-50 border-t border-slate-100 rounded-b-xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold py-2 px-5 rounded-md transition-colors"
              >
                Close Profile
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default IndividualManagementCard;