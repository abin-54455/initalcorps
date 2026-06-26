import React from 'react';
import Logins from './Logins';
import { BiUserCircle } from "react-icons/bi";
import { Building2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function Welcome({ onSelectRole }) {
  const navigate = useNavigate();

  const roleCardsData = [
    {
      id: 'admin',
      hoverTheme: 'admin',
      badgeText: 'Full Access',
      badgeColorClass: 'bg-slate-100 text-slate-600',
      roleTitle: 'Admin Login',
      description:
        'Full platform control, user management, analytics & system configuration.',
      buttonText: 'Login as Admin',
      buttonColorClass:
        'text-[#1A365D] border-[#1A365D] hover:bg-slate-50',
      icon: (
        <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-[#1A365D]">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 'executive',
      hoverTheme: 'executive',
      badgeText: 'Leadership',
      badgeColorClass:
        'bg-amber-50 text-amber-700 border border-amber-100',
      roleTitle: 'Executive Login',
      description:
        'High-level reports, business insights, team performance & strategic overviews.',
      buttonText: 'Login as Executive',
      buttonColorClass:
        'text-amber-700 border-amber-200 hover:bg-amber-50/50',
      icon: (
        <div className="w-14 h-14 bg-amber-50/60 rounded-xl flex items-center justify-center text-amber-700">
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
      ),
    },
    {
      id: 'user',
      hoverTheme: 'user',
      badgeText: 'Client',
      badgeColorClass:
        'bg-cyan-50 text-cyan-700 border border-cyan-100',
      roleTitle: 'User Login',
      description:
        'Access your services, track requests, view quotations & manage your profile.',
      buttonText: 'Login as User',
      buttonColorClass:
        'text-cyan-700 border-cyan-200 hover:bg-cyan-50/50',
      icon: (
        <div className="w-14 h-14 bg-cyan-50/60 rounded-xl flex items-center justify-center text-cyan-700">
          <BiUserCircle className="w-6 h-6" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col justify-between items-center p-6 font-sans">
      <div className="w-full flex flex-col items-center my-auto">
        <div className="flex items-center gap-2 mb-6 bg-white shadow-sm border border-gray-100 px-4 py-2 rounded-xl">
          <div className="w-7 h-7 bg-[#1A365D] text-white flex items-center justify-center rounded-md font-bold text-sm">
            <Building2 className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-[#1A365D]">
            InitialCorps Legal
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-gray-200/60 text-gray-500 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          Secure Portal
        </div>

        <h1 className="text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2 text-center">
          Welcome Back
        </h1>

        <p className="text-sm text-gray-400 font-medium mb-12 text-center max-w-sm">
          Select your role to continue to your dashboard
        </p>

        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl px-4">
          {roleCardsData.map((card) => (
            <Logins
              key={card.id}
              hoverTheme={card.hoverTheme}
              badgeText={card.badgeText}
              badgeColorClass={card.badgeColorClass}
              icon={card.icon}
              roleTitle={card.roleTitle}
              description={card.description}
              buttonText={card.buttonText}
              buttonColorClass={card.buttonColorClass}
              onCardClick={() => {
                if (card.id === "user") {
                  navigate("/login");
                } else if (card.id === "executive") {
                  navigate("/executive"); // Routes directly to the gated Executive Layout
                } else {
                  onSelectRole && onSelectRole(card.id);
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full text-center mt-12 text-[11px] text-gray-400 font-medium space-y-1">
        <div className="inline-flex items-center gap-1.5 justify-center">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
          All connections are encrypted & secured
        </div>
        <div>
          © 2026 InitialCorps Legal. All rights reserved.
        </div>
      </div>
    </div>
  );
}