import { useNavigate } from "react-router-dom";
import BannerCard from "./BannerCard";
import AboutUs from "./AboutUs";
import AboutCard from "./AboutCard";
import Mission from "./Mission";

const NAV_LINKS = [
  { label: "Home",                 action: "home" },
  { label: "Services",             action: "section",  sectionId: "services-section" },
  { label: "Articles",             action: "section",  sectionId: "articles-section" },
  { label: "Pricing",              action: "section",  sectionId: "pricing-section" },
  { label: "Funding & Investment", action: "navigate", path: "/basic/investment-and-funding" },
  { label: "Testimonials",         action: "section",  sectionId: "testimonials-section" },
  { label: "Contact Us",           action: "section",  sectionId: "footer-section" },
];

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleNav = (link) => {
    if (link.action === "home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.action === "navigate") {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (link.action === "section") {
      // If already on the main page, scroll to section
      const el = document.getElementById(link.sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Navigate home first, then scroll after render
        navigate("/");
        setTimeout(() => {
          const target = document.getElementById(link.sectionId);
          if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", paddingBottom: "60px" }}>

      {/* 44. Sticky Navigation Header Bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4%",
          height: "70px",
          borderBottom: "1px solid #e2e8f0",
          background: "#ffffff",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => { navigate("/"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
        >
          <div style={{ background: "#0f172a", color: "#ffffff", padding: "8px 12px", borderRadius: "6px", fontWeight: "bold", fontSize: "16px" }}>
            🏢
          </div>
          <span style={{ fontWeight: "700", fontSize: "18px", color: "#0f172a" }}>
            InitialCorps{" "}
            <span style={{ color: "#1e3a8a", fontWeight: "400" }}>Legal</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", gap: "24px" }}>
          {NAV_LINKS.map((link, idx) => (
            <span
              key={idx}
              onClick={() => handleNav(link)}
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: link.label === "Home" ? "#0f172a" : "#64748b",
                cursor: "pointer",
                transition: "color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#123B73"}
              onMouseLeave={e => e.currentTarget.style.color = link.label === "Home" ? "#0f172a" : "#64748b"}
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* Header Action Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={() => navigate("/dashboard")}
            style={{ background: "transparent", border: "1px solid #cbd5e1", padding: "8px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#334155", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
          >
            👤 Dashboard
          </button>
          <button
            onClick={() => navigate("/login")}
            style={{ background: "#0f172a", border: "none", padding: "8px 16px", borderRadius: "6px", fontSize: "13px", fontWeight: "600", color: "#ffffff", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}
          >
            🚪 Logout
          </button>
        </div>
      </header>

      {/* Auto-sliding Carousel Banner */}
      <BannerCard />

      {/* Main Container Section */}
      <section style={{ padding: "60px 6%", background: "#ffffff" }}>
        {/* 46. Intro Title & Paragraph Text Block */}
        <AboutUs />

        {/* 47. 4-Column Service Grid Layout */}
        <AboutCard />

        {/* 48. Corporate Mission Statement & Satisfaction Metrics */}
        <Mission />
      </section>
    </div>
  );
}