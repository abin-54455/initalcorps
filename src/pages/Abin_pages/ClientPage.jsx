import React, { useState } from 'react';
import AdminPanel from '../../components/abin/AdminHeader'; // Kept your exact import path
import AdminDashboard from '../../components/abin/AdminSideMenu'; // Kept your exact import path
import ClientManagement from '../../components/abin/ClientManagement'; // Kept your exact import path
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for responsive mobile toggle

export default function ClientPage() {
  const [currentTab, setCurrentTab] = useState('Clients');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleBackToWebsite = () => {
    console.log('Navigating back to main website...');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative overflow-x-hidden">
      
      {/* 1. Top Header Component with Locked Height & Alignment Dividers */}
      <div className="sticky top-0 z-40 h-16 bg-white flex items-center justify-between border-b border-slate-100 shadow-sm">
        {/* Mobile Menu Action Trigger Icon Button */}
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          type="button"
          className="md:hidden p-2 ml-3 text-slate-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors absolute left-0 z-50 flex items-center justify-center"
          aria-label="Toggle Navigation Drawer"
        >
          {isMobileSidebarOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        {/* Dynamic indentation spacing wrapper clears space for the absolute menu toggle on mobile */}
        <div className="w-full pl-12 md:pl-0">
          <AdminPanel onBackToWebsite={handleBackToWebsite} />
        </div>
      </div>

      {/* 2. Dimmed App Backdrop Overlay - Fades background when mobile navigation sidebar is active */}
      {isMobileSidebarOpen && (
        <div 
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-30 md:hidden transition-opacity duration-300"
        />
      )}

      {/* 3. Main Adaptive Content Frame Workspace Splitter */}
      <div className="flex flex-1 relative w-full">
        
        {/* Persistent Left Sidebar - Standard desktop layout viewport display anchor */}
        <aside className="hidden md:block shrink-0 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto border-r border-slate-100 bg-white">
          <AdminDashboard currentTab={currentTab} onTabChange={setCurrentTab} />
        </aside>

        {/* Sliding Navigation Drawer Panel - Visible exclusively on handheld mobile frame viewport widths */}
        <aside className={`
          fixed top-16 left-0 bottom-0 z-30 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <AdminDashboard 
            currentTab={currentTab} 
            onTabChange={(tab) => {
              setCurrentTab(tab);
              setIsMobileSidebarOpen(false); // Clean up context window space by auto-closing side-menu on tab transition
            }} 
          />
        </aside>

        {/* 4. FIXED: Removed max-width block structures and aligned padding down to p-4 for perfect screen closeness */}
        <main className="flex-1 p-4 w-full transition-all duration-300">
          {currentTab === 'Clients' ? (
            <ClientManagement />
          ) : (
            <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm min-h-[350px] flex items-center justify-center">
              <p className="text-slate-400 font-medium text-center text-sm">
                {currentTab} Dashboard Section Content Workspace
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}