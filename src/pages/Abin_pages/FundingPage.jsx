import React, { useState } from 'react';
import AdminPanel from '../../components/abin/AdminHeader';
import AdminDashboard from '../../components/abin/AdminSideMenu';
import Funding from '../../components/abin/Funding';
import { FiMenu, FiX } from 'react-icons/fi';

export default function FundingPage() {
  const [currentTab, setCurrentTab] = useState('Funding');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleBackToWebsite = () => {
    console.log('Navigating back to main website...');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 1. Header Navigation Wrapper - Locked to clear spacing sync */}
      <div className="sticky top-0 z-40 h-16 bg-white flex items-center justify-between border-b border-slate-100 shadow-sm">
        {/* Mobile Hamburger Toggle Button */}
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          type="button"
          className="md:hidden p-2 ml-3 text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors absolute left-0 z-50 flex items-center justify-center"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileSidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        {/* Indentation spacing clears room for toggle icon on mobile viewports */}
        <div className="w-full pl-12 md:pl-0">
          <AdminPanel onBackToWebsite={handleBackToWebsite} />
        </div>
      </div>

      {/* 2. Dimmed App Backdrop Overlay - visible exclusively on mobile */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-30 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 3. Layout Split Framework Container */}
      <div className="flex flex-1 relative w-full">
        
        {/* Desktop Sidebar Layout Fixed Sidebar Panel */}
        <aside className="hidden md:block shrink-0 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto border-r border-slate-100 bg-white">
          <AdminDashboard currentTab={currentTab} onTabChange={setCurrentTab} />
        </aside>

        {/* Mobile Sliding Flyout Drawer Menu */}
        <aside className={`
          fixed top-16 left-0 bottom-0 z-30 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <AdminDashboard 
            currentTab={currentTab} 
            onTabChange={(tab) => {
              setCurrentTab(tab);
              setIsMobileSidebarOpen(false); 
            }} 
          />
        </aside>

        {/* 4. Fluid Responsive Content Viewport */}
        {/* FIXED: Removed maximum width limits and squeezed down outer margins to align layout flush */}
        <main className="flex-1 p-4 w-full transition-all duration-300">
          {currentTab === 'Funding' ? (
            <Funding />
          ) : (
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm min-h-[350px] flex items-center justify-center">
              <p className="text-slate-400 font-medium text-center text-sm">
                {currentTab} Section Content Workspace
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}