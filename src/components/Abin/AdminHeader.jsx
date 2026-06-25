import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate hook

export default function AdminHeader({ onBackToWebsite }) {
  const navigate = useNavigate(); // 2. Initialize navigate function

  const handleBackClick = (e) => {
    // If a custom callback prop function was provided, execute it
    if (onBackToWebsite) {
      onBackToWebsite(e);
    }
    
    // 3. Programmatically force a client-side route redirection to the welcome page path
    navigate("/WelcomePage"); // Replace "/" with your custom path mapping if Welcomepage is mounted elsewhere (e.g., "/welcome")
  };

  return (
    <header className="bg-white h-16 border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-40 shadow-[0_1px_8px_rgba(0,0,0,0.01)]">
      <div className="flex items-center gap-3">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-black"
          style={{
            background: "linear-gradient(135deg, rgb(196, 105, 8) 0%, rgb(174, 108, 8) 100%)"
          }}
        >
          <IoSettingsOutline />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-800 leading-none mb-1">Admin Panel</span>
          <span className="text-[10px] font-medium text-slate-400">InitialCorps Legal</span>
        </div>
      </div>

      <button 
        onClick={handleBackClick} // Updated click event pointer targets route transition directly
        type="button"
        className="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1.5 transition-colors"
      >
        <span>←</span> Back to Website
      </button>
    </header>
  );
}