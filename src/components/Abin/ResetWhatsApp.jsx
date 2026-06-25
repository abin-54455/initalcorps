import React, { useState, useEffect } from 'react';
import { FiMessageSquare } from "react-icons/fi";

const ResetWhatsApp = ({ 
  initialNumber = "919876543210", 
  onSaveChanges, 
  onCancel 
}) => {
  const [whatsAppNumber, setWhatsAppNumber] = useState(initialNumber);

  // Sync state if initialNumber comes dynamic from external server props asynchronously
  useEffect(() => {
    setWhatsAppNumber(initialNumber);
  }, [initialNumber]);

  const handleSave = (e) => {
    e.preventDefault();
    if (onSaveChanges) onSaveChanges(whatsAppNumber);
  };

  const handleCancel = () => {
    setWhatsAppNumber(initialNumber);
    if (onCancel) onCancel();
  };

  return (
 <div className="w-full max-w-4xl mx-auto mt-8 border border-slate-200 rounded-xl p-6 bg-white shadow-sm mb-6 relative">
      
      {/* Header and Right Icon */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">WhatsApp Contact Number</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            This number will be used for customer inquiries
          </p>
        </div>
        {/* Chat Outline Brand Accent Icon */}
        <div className="text-emerald-500 p-1">
         {<FiMessageSquare  className="text-green-500 w-6 h-6" />}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSave}>
        <div className="mb-5">
          <label className="block text-xs font-bold text-slate-600 mb-2">
            WhatsApp Number (with country code)
          </label>
          <div className="max-w-3xl">
            <input
              type="text"
              value={whatsAppNumber}
              onChange={(e) => setWhatsAppNumber(e.target.value)}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-emerald-500"
              placeholder="e.g., 919876543210"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="flex items-center space-x-2 bg-[#00a86b] hover:bg-[#00945e] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            {/* Minimalist Save Floppy Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            <span>Save Changes</span>
          </button>
          
          <button
            type="button"
            onClick={handleCancel}
            className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 text-xs font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>

    </div>
  );
};

export default ResetWhatsApp;