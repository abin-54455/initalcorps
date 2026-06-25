import React, { useState } from 'react';
import AdminPanel from '../../components/abin/AdminHeader';
import AdminDashboard from '../../components/abin/AdminSideMenu';
import AdminSettings from '../../components/abin/AdminSettings';
import { FiMenu, FiX } from 'react-icons/fi';

export default function SettingPage() {
  const [currentTab, setCurrentTab] = useState('Settings');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Core configuration states
  const [passwordData, setPasswordData] = useState({
    email: 'admin@initialcorps.in',
    passwordLength: 8
  });

  const [whatsappData, setWhatsappData] = useState({
    number: '+919876543210'
  });

  const handleBackToWebsite = () => {
    console.log('Navigating back to main website...');
  };

  const handleEditPassword = (newPassword) => {
    setPasswordData(prev => ({
      ...prev,
      passwordLength: newPassword.length || 8
    }));
  };

  const handleEditNumber = (newNumber) => {
    setWhatsappData({ number: newNumber });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 1. Top Header Area Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 flex items-center justify-between h-16">
        {/* Mobile Hamburger Menu Toggle Trigger */}
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          type="button"
          className="md:hidden p-2 ml-4 text-slate-600 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors absolute left-0 z-50 flex items-center justify-center"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Header content wrapping element */}
        <div className="w-full pl-14 md:pl-0">
          <AdminPanel onBackToWebsite={handleBackToWebsite} />
        </div>
      </div>

      {/* 2. Dimmed App Backdrop Overlay for Mobile viewports */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-[2px] z-30 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 3. Main Split Framework Workspace Container */}
      {/* FIXED: Removed loose styling properties to maintain structural anchoring */}
      <div className="flex flex-1 w-full relative items-stretch">
        
        {/* Desktop Sidebar Layout Container */}
        {/* FIXED: Replaced h-[calc(100vh-64px)] structure to properly anchor the dashboard block */}
        <aside className="hidden md:block shrink-0 w-64 border-r border-slate-200 bg-white sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <AdminDashboard currentTab={currentTab} onTabChange={setCurrentTab} />
        </aside>

        {/* Handheld Mobile Flyout Slide-in Menu Drawer */}
        <aside className={`
          fixed top-16 left-0 bottom-0 z-30 w-64 bg-white shadow-2xl border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
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

        {/* 4. Fluid Responsive Content Stage Viewport Area */}
        {/* FIXED: Removed conflicting constraints. Content now scales cleanly up to 4xl alongside the dashboard layout */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full overflow-y-auto">
          <div className="w-full max-w-4xl transition-all duration-300">
            {currentTab === 'Settings' ? (
              <AdminSettings 
                passwordData={passwordData}
                whatsappData={whatsappData}
                onEditPassword={handleEditPassword}
                onEditNumber={handleEditNumber}
              />
            ) : (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm min-h-[350px] flex items-center justify-center">
                <p className="text-slate-400 font-medium text-center text-sm sm:text-base">
                  {currentTab} Section Content Workspace
                </p>
              </div>
            )}
          </div>
        </main>
        
      </div>
    </div>
  );
}