import React, { useState } from "react";
import AdminPanel from "../../components/abin/AdminHeader";
import AdminDashboard from "../../components/abin/AdminSideMenu";
import DashboardOverview from "../../components/abin/DashboardOverview";
import MonthlyAnalytics from "../../components/abin/MonthlyAnalytics";
import RecentClientCard from "../../components/abin/RecentClientCard";
import ActiveOffers from "../../components/abin/ActiveOffer";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardPage() {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleBackToWebsite = () => {
    console.log("Navigating back to main website...");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans relative">

      {/* 🔵 HEADER */}
      <div className="sticky top-0 z-40 bg-white flex items-center justify-between">
        
        {/* Hamburger */}
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="md:hidden p-2 ml-4 text-slate-600 border rounded-lg absolute left-0 z-50"
        >
          {isMobileSidebarOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className="w-full pl-12 md:pl-0">
          <AdminPanel onBackToWebsite={handleBackToWebsite} />
        </div>
      </div>

      {/* 🔵 OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
        />
      )}

      {/* 🔵 MAIN LAYOUT */}
      <div className="flex flex-1 relative">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden md:block sticky top-16 h-[calc(100vh-64px)]">
          <AdminDashboard
            currentTab={currentTab}
            onTabChange={setCurrentTab}
          />
        </aside>

        {/* MOBILE SIDEBAR (DRAWER) */}
        <aside
          className={`
            fixed top-16 left-0 bottom-0 w-64 bg-white z-40 shadow-xl
            transform transition-transform duration-300 md:hidden overflow-y-auto
            ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <AdminDashboard
            currentTab={currentTab}
            onTabChange={(tab) => {
              setCurrentTab(tab);
              setIsMobileSidebarOpen(false);
            }}
          />
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto w-full">

          {currentTab === "Dashboard" ? (
            <div className="flex flex-col gap-6">
              <DashboardOverview />
              <MonthlyAnalytics />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentClientCard
                  clientName="Rajesh Kumar"
                  companyName="TechVista Solutions Pvt Ltd"
                />

                <ActiveOffers
                  offerName="New Year Special"
                  discountText="20% OFF"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border shadow-sm min-h-[400px] flex items-center justify-center">
              <p className="text-slate-400">
                {currentTab} Section Content Workspace
              </p>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}