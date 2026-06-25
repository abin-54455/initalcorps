import React, { useState } from 'react';
import AdminPanel from '../../components/abin/AdminHeader'; // Kept your exact import path
import AdminDashboard from '../../components/abin/AdminSideMenu'; 
import ManageServices from '../../components/abin/ManageServices';// Your code labeled as manageservices
import { FiMenu, FiX } from 'react-icons/fi';

export default function ServicePage() {
  const [currentTab, setCurrentTab] = useState('Services');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleBackToWebsite = () => {
    console.log('Navigating back to main website...');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 1. Header Navigation Wrapper */}
      <div className="sticky top-0 z-40 bg-white flex items-center justify-between">
        {/* Mobile Hamburger / Toggle Trigger Button */}
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          type="button"
          className="md:hidden p-2 ml-4 text-slate-600 hover:bg-slate-50 border border-slate-100 rounded-lg transition-colors absolute left-0 z-50 flex items-center justify-center"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Dynamic indentation spacing wrapper clears space for toggle icon */}
        <div className="w-full pl-12 md:pl-0">
          <AdminPanel onBackToWebsite={handleBackToWebsite} />
        </div>
      </div>

      {/* 2. Dimmed App Backdrop Overlay */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-30 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 3. Layout Split Framework Container */}
      <div className="flex flex-1 relative w-full">
        
        {/* Desktop Sidebar Layout Sidecar */}
        <aside className="hidden md:block shrink-0 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
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
              setIsMobileSidebarOpen(false); // Auto-close side drawer menu
            }} 
          />
        </aside>

        {/* 4. Fluid Responsive Content Stage Area Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full transition-all duration-300">
          {currentTab === 'Services' ? (
            <ManageServices />
          ) : (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm min-h-[350px] flex items-center justify-center">
              <p className="text-slate-400 font-medium text-center text-sm sm:text-base">
                {currentTab} Section Content Workspace
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}