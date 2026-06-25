import React, { useState } from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";

const ResetPassword = ({ 
  email = "admin@initialcorps.in", 
  onSavePassword, 
  onCancel 
}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (onSavePassword) onSavePassword(password);
  };

  const handleCancel = () => {
    setPassword('');
    if (onCancel) onCancel();
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 border border-slate-200 rounded-xl p-6 bg-white shadow-sm mb-6 relative">
      
      {/* Header and Right Icon */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">Executive Login Password</h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Password for admin access (email: <span className="font-medium text-slate-500">{email}</span>)
          </p>
        </div>
        {/* Right Arrow/Logout style minimalist icon */}
        <div className="text-slate-700 p-1">
          <BsBoxArrowInRight className="text-black-800 w-6 h-6" />
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSave}>
        <div className="mb-5">
          <label className="block text-xs font-bold text-slate-700 mb-2">
            New Password
          </label>
          <div className="relative max-w-3xl">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="•••••••••"
              className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:border-emerald-500 pr-10"
            />
            {/* Eye Icon for Visibility Toggle */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
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
            <span>Save Password</span>
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

export default ResetPassword;