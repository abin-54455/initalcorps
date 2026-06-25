import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiUsers,
  FiBox,
  FiFileText,
  FiGift,
  FiBriefcase,
  FiSettings
} from "react-icons/fi";

export default function AdminDashboard({ currentTab = "Dashboard", onTabChange }) {
  const navigate = useNavigate();

  const menuItems = [
    { id: 'Dashboard', label: 'Dashboard', icon: <FiGrid />, path: '/dashboardPage' },
    { id: 'Clients', label: 'Clients', icon: <FiUsers />, path: '/clientPage' },
    { id: 'Services', label: 'Services', icon: <FiBox />, path: '/servicePage' },
    { id: 'Articles', label: 'Articles', icon: <FiFileText />, path: '/articlePage' },
    { id: 'Offers', label: 'Offers', icon: <FiGift />, path: '/OfferPage' },
    { id: 'Funding', label: 'Funding', icon: <FiBriefcase />, path: '/fundingPage' },
    { id: 'Settings', label: 'Settings', icon: <FiSettings />, path: '/SettingPage' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-100 p-4 flex flex-col gap-1 h-full min-h-[calc(100vh-65px)]">
      {menuItems.map((item) => {
        const isActive = currentTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => {
              onTabChange?.(item.id);   // update UI state
              navigate(item.path);      // change page
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
              isActive
                ? 'bg-orange-50 text-orange-700'
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            {item.label}
          </button>
        );
      })}
    </aside>
  );
}