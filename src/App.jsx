import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// =========================================================================
// 1. PAGE & COMPONENT IMPORTS
// =========================================================================

// --- User-Facing Pages (Abin & Sreek) ---
import Welcomepage from "./pages/Abin_pages/Welcomepage";
import DashboardPage from "./pages/Abin_pages/Dashboardpage";
import ClientPage from "./pages/Abin_pages/ClientPage";
import ServicePage from "./pages/Abin_pages/ServicePage";
import OfferPage from "./pages/Abin_pages/OfferPage";
import FundingPage from "./pages/Abin_pages/FundingPage";
import SettingPage from "./pages/Abin_pages/SettingPage";
import ArticlePage from "./pages/Abin_pages/ArticlePage";
import ServicesPage from "./pages/sreek-pages/ServicesPage";
import ArticleDetail from "./pages/sreek-pages/ArticleDetail";
import UserSignIn from "./components/geethika/UserSignIn";
import RegisterPage from "./components/geethika/RegisterPage";

// --- Executive Portal Main Layout Pages (FIXED PATHS TO SUBFOLDER) ---
import DashboardViewPage from './pages/geethika_pages/DashboardViewPage';
import OrdersManagementPage from './pages/geethika_pages/OrdersManagementPage';
import UserProfilePage from './pages/geethika_pages/UserProfilePage';
import ComponentPreviewPage from './pages/geethika_pages/ComponentPreviewPage';

// --- Executive Core Structural Layout Components ---
import ExecutiveLogin from './components/geethika/ExecutiveLogin';
import ExecutivePortal from './components/geethika/ExecutivePortal';
import ExecutiveDashboard from './components/geethika/ExecutiveDashboard';

// --- Executive Component Direct Sandbox Views ---
import ExeDashboardOverview from './components/geethika/ExeDashboardOverview';
import ExeTotalOrders from './components/geethika/ExeTotalOrders';
import ExeRecentOrders from './components/geethika/ExeRecentOrders';
import ExeDashIndividualOrders from './components/geethika/ExeDashIndividualOrders';
import ExeIndividualOrder from './components/geethika/ExeIndividualOrder';
import ExeProfileCard from './components/geethika/ExeProfileCard';
import ExeSummary from './components/geethika/ExeSummary';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: 'sans-serif' }}>
      <style>{`html, body, #root { margin:0; padding:0; background:#f4f6f9; width:100%; }`}</style>
      
      <Routes>
        {/* ========================================================================= */}
        {/* A. GENERAL PUBLIC USER PATHS (ABIN, SREEK, GEETHIKA)                       */}
        {/* ========================================================================= */}
        <Route path="/" element={<Welcomepage />} />
        <Route path="/welcomepage" element={<Welcomepage />} />
        <Route path="/login" element={<UserSignIn />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* User Workspace Panel Sections */}
        <Route path="/dashboardpage" element={<DashboardPage />} />
        <Route path="/clientpage" element={<ClientPage />} />
        <Route path="/servicepage" element={<ServicePage />} />
        <Route path="/articlepage" element={<ArticlePage />} />
        <Route path="/offerpage" element={<OfferPage />} />
        <Route path="/fundingpage" element={<FundingPage />} />
        <Route path="/settingpage" element={<SettingPage />} />

        {/* Article Slug Engine */}
        <Route path="/article/:slug" element={<ArticleDetail />} />

        {/* ========================================================================= */}
        {/* B. EXECUTIVE ISOLATED RAW DEVELOPER ROUTING LAYER                        */}
        {/* ========================================================================= */}
        <Route path="/view/:componentName" element={<ComponentPreviewPage />} />

        {/* Individual Component Endpoint Maps */}
        <Route path="/exe-login" element={<ExecutiveLogin onLoginSuccess={() => setIsLoggedIn(true)} />} />
        <Route path="/portal" element={<ExecutivePortal onLogout={() => setIsLoggedIn(false)} onBack={() => navigate('/')} />} />
        <Route path="/sidebar" element={<div style={{ width: '240px' }}><ExecutiveDashboard /></div>} />
        <Route path="/overview" element={<ExeDashboardOverview />} />
        <Route path="/total-orders-card" element={<ExeTotalOrders />} />
        <Route path="/recent-orders" element={<ExeRecentOrders />} />
        <Route path="/dash-individual-order" element={<ExeDashIndividualOrders />} />
        <Route path="/individual-order-card" element={<ExeIndividualOrder />} />
        <Route path="/profile-card" element={<ExeProfileCard />} />
        <Route path="/profile-summary" element={<ExeSummary />} />
        <Route path="/*" element={<ServicesPage />} />

        {/* ========================================================================= */}
        {/* C. SECURED EXECUTIVE LIVE PORTAL INNER LAYOUT MANAGEMENT                  */}
        {/* ========================================================================= */}
        <Route 
          path="/executive/*" 
          element={
            !isLoggedIn ? (
              <ExecutiveLogin onLoginSuccess={() => setIsLoggedIn(true)} />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                
                {/* Top Layout Management Banner Header (Block 30) */}
                <ExecutivePortal onLogout={() => setIsLoggedIn(false)} onBack={() => navigate(-1)} />
                
                {/* Main Interactive Screen Frame Body Box */}
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: '24px', gap: '24px', maxWidth: '1440px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
                  
                  {/* Left Navigation Controlling Sidebar Menu Panel (Block 31) */}
                  <div style={{ flex: '0 0 240px', width: '240px' }}>
                    <ExecutiveDashboard />
                  </div>
                  
                  {/* Right Mounting Board Workspace Box */}
                  <div style={{ flex: '1', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <Routes>
                      <Route path="/" element={<DashboardViewPage />} />
                      <Route path="/orders" element={<OrdersManagementPage />} />
                      <Route path="/profile" element={<UserProfilePage />} />
                      <Route path="*" element={<Navigate to="/executive" replace />} />
                    </Routes>
                  </div>

                </div>
              </div>
            )
          } 
        />

        {/* ========================================================================= */}
        {/* D. FALLBACK MATCH HANDLING FALL-THROUGH                                  */}
        {/* ========================================================================= */}
        <Route path="/services/*" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}