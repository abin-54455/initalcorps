import { NavLink } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Briefcase, Crown } from "lucide-react";

import BasicServices from "./BasicServices";
import PremiumServices from "./PremiumServices";
import ServiceDetail from "./ServiceDetail";
import CurrentStartups from "../../components/sreekaanth/CurrentStartups";
import ArticleCards from "../../components/sreekaanth/ArticleCards";
import DealsDiscounts from "../../components/sreekaanth/DealsDiscounts";

// Import your landing sections
import AboutUs from "../../components/geethika/AboutUs";
import AboutCard from "../../components/geethika/AboutCard";
import Mission from "../../components/geethika/Mission";
import UserDashboard from "../../components/geethika/UserDashboard";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">

      {/* ── Sticky Header Navigation (From UserDashboard) ── */}
      <UserDashboard />

      {/* ── Main Layout Container ── */}
      <div className="px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
        <div className="max-w-7xl mx-auto">

          {/* Header & Plan Toggle Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-10 lg:mb-12">
            <div>
              <span className="inline-flex items-center gap-2.5 pl-3.5 pr-4 py-2 rounded-full bg-gray-200 border border-slate-300 text-xs">
                <Briefcase size={15} className="text-slate-500" />
                <span className="w-px h-4 bg-slate-300" />
                <span className="font-mono font-bold tracking-widest text-[#123B73]">
                  OUR SERVICES
                </span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 text-slate-900">
                Services We Offer
              </h1>

              <p className="text-slate-500 mt-3 max-w-xl">
                Choose from our comprehensive range of corporate legal services
              </p>
            </div>

            <div className="lg:text-left">
              <p className="text-xs font-semibold tracking-wider text-slate-500 mb-2">
                SELECT PLAN
              </p>

              <div className="flex w-full sm:inline-flex sm:w-auto bg-white p-1 rounded-xl border border-slate-200 gap-1 shadow-sm">
                <NavLink
                  to="/basic"
                  className={({ isActive }) =>
                    `flex-1 sm:flex-none text-center px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#123B73] text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`
                  }
                >
                  Basic
                </NavLink>

                <NavLink
                  to="/premium"
                  className={({ isActive }) =>
                    `flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-[#D09A4E] text-white"
                        : "text-slate-600 hover:text-slate-900"
                    }`
                  }
                >
                  <Crown size={14} />
                  Premium
                </NavLink>
              </div>
            </div>
          </div>

          {/* ── About Us & Mission Sections (Matches layout in WhatsApp Image 2026-06-25 at 10.10.37 PM_2.jpeg) ── */}
          <div className="px-4 pb-12 pt-4 sm:px-6 lg:px-10">
            <div className="max-w-6xl mx-auto">
              {/* Mockup Section 1: Intro Text Block */}
              <AboutUs />

              {/* Mockup Section 2: Four Column Feature Badges */}
              <div className="mt-8">
                <AboutCard />
              </div>

              {/* Mockup Section 3: Company Mission & Metrics Card */}
              <Mission />
            </div>
          </div>

          <hr className="border-slate-200 my-8" />

          {/* ── Dynamic Routes & Pricing Layout Content ── */}
          <div className="px-4 py-4 max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/basic" replace />} />
              <Route path="/basic" element={<BasicServices />} />
              <Route path="/basic/:slug" element={<ServiceDetail plan="basic" />} />
              <Route path="/premium" element={<PremiumServices />} />
              <Route path="/premium/:slug" element={<ServiceDetail plan="premium" />} />
              <Route path="*" element={<Navigate to="/basic" replace />} />
            </Routes>

            <div className="mt-12">
              <CurrentStartups />
            </div>
          </div>

          {/* ── Full-width Bottom Sections ── */}
          <ArticleCards />
          <DealsDiscounts />

        </div>
      </div>
    </div>
  );
}