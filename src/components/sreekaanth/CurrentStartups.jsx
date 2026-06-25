import { useEffect } from "react";
import { TrendingUp } from "lucide-react";
import StartupCard from "./StartupCard";
import ExploreFunding from "./ExploreFunding";

// Component 61 — full section wrapper
const insights = [
  {
    title: "Unicorn Boom",
    badge: "Growing",
    badgeColor: "#edf7ed",
    badgeText: "#2e7d32",
    stat: "108+",
    statSmall: false,
    description:
      "India now has over 108 unicorns valued at $1B+, making it the third-largest startup ecosystem globally after US and China.",
  },
  {
    title: "Funding Landscape",
    badge: "Stabilizing",
    badgeColor: "#fdf3e7",
    badgeText: "#b45309",
    stat: "$10.9B",
    statSmall: false,
    description:
      "Despite global slowdown, Indian startups raised $10.9 billion in 2025, with focus shifting to profitability over growth-at-all-costs.",
  },
  {
    title: "Govt Support",
    badge: "Expanding",
    badgeColor: "#e8f0fe",
    badgeText: "#1a56a0",
    stat: "₹1,000 Cr",
    statSmall: false,
    description:
      "Government's Fund of Funds for Startups has committed over ₹1,000 crore to Alternative Investment Funds supporting early-stage ventures.",
  },
  {
    title: "Sector Focus",
    badge: "Hot",
    badgeColor: "#fdecea",
    badgeText: "#c0392b",
    stat: "Fintech & SaaS",
    statSmall: true,
    description:
      "Fintech, SaaS, and deep-tech startups are attracting maximum investor attention, with AI/ML integration becoming table stakes.",
  },
  {
    title: "Tier-2/3 Rise",
    badge: "Rising",
    badgeColor: "#edf7ed",
    badgeText: "#2e7d32",
    stat: "45%",
    statSmall: false,
    description:
      "45% of new startups are emerging from tier-2 and tier-3 cities, driven by lower costs and improving digital infrastructure.",
  },
  {
    title: "Compliance Focus",
    badge: "Mandatory",
    badgeColor: "#fdf3e7",
    badgeText: "#b45309",
    stat: "Critical",
    statSmall: true,
    description:
      "With increased scrutiny on corporate governance, startups must prioritize compliance from day one. GST, ROC filings, and DPIIT recognition are essential.",
  },
];

const CSS = `
  .mi-section { padding-top: 56px; padding-bottom: 8px; }

  .mi-header { text-align: center; margin-bottom: 32px; }
  .mi-eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    background: #f1f5f9; border: 1px solid #e2e8f0;
    border-radius: 999px; padding: 5px 14px 5px 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.07em; color: #475569;
  }
  .mi-eyebrow-icon { color: #D09A4E; }
  .mi-title {
    font-size: clamp(22px, 3.5vw, 38px); font-weight: 900;
    color: #0f172a; margin: 18px 0 10px; letter-spacing: -0.5px;
  }
  .mi-subtitle { font-size: 15px; color: #D09A4E; margin: 0; font-weight: 400; }

  .mi-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 16px; margin-bottom: 20px;
  }

  .mi-card {
    background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px;
    padding: 24px; display: flex; flex-direction: column; gap: 12px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
    height: 100%; box-sizing: border-box;
  }
  .mi-card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .mi-card-title { font-weight: 700; font-size: 15px; color: #0f172a; line-height: 1.3; }
  .mi-card-badge {
    font-size: 11px; font-weight: 600; padding: 4px 12px;
    border-radius: 999px; white-space: nowrap; flex-shrink: 0;
  }
  .mi-card-stat { font-weight: 800; color: #D09A4E; line-height: 1.1; }
  .mi-card-stat--large { font-size: 32px; letter-spacing: -1px; }
  .mi-card-stat--small { font-size: 24px; letter-spacing: -0.5px; }
  .mi-card-desc { font-size: 13px; color: #64748b; line-height: 1.65; margin: 0; flex-grow: 1; }

  .mi-banner {
    background: #f1f5f9; border-radius: 16px;
    padding: 32px 48px; text-align: center;
  }
  .mi-banner-text {
    font-size: 14px; color: #475569; line-height: 1.75;
    margin: 0 0 22px; max-width: 680px; margin-left: auto; margin-right: auto;
  }
  .mi-banner-bold { font-weight: 700; color: #0f172a; }
  .mi-banner-accent { color: #D09A4E; font-weight: 600; }
  .mi-btn {
    background: #123B73; color: #ffffff; border: none; border-radius: 8px;
    padding: 13px 30px; font-size: 14px; font-weight: 700; cursor: pointer;
    display: inline-flex; align-items: center; gap: 8px;
    letter-spacing: 0.01em; transition: background 0.2s;
  }
  .mi-btn:hover { background: #0e2f5c; }

  @media (max-width: 1024px) {
    .mi-grid { grid-template-columns: repeat(2, 1fr); }
    .mi-banner { padding: 28px 32px; }
  }
  @media (max-width: 640px) {
    .mi-section { padding-top: 40px; }
    .mi-grid { grid-template-columns: 1fr; gap: 12px; }
    .mi-title { font-size: 24px; margin: 14px 0 8px; }
    .mi-subtitle { font-size: 13px; }
    .mi-header { margin-bottom: 24px; }
    .mi-card { padding: 18px 20px; }
    .mi-card-stat--large { font-size: 28px; }
    .mi-card-stat--small { font-size: 22px; }
    .mi-banner { padding: 24px 20px; border-radius: 12px; }
    .mi-banner-text { font-size: 13px; margin-bottom: 18px; }
    .mi-btn { width: 100%; justify-content: center; padding: 14px 20px; }
  }
`;

export default function CurrentStartups() {
  useEffect(() => {
    const styleId = "current-startups-styles";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }
    return () => { document.getElementById(styleId)?.remove(); };
  }, []);

  return (
    <section className="mi-section">

      {/* Header */}
      <div className="mi-header">
        <span className="mi-eyebrow">
          <TrendingUp size={12} strokeWidth={2.5} className="mi-eyebrow-icon" />
          MARKET INSIGHTS
        </span>
        <h2 className="mi-title">Current Startup Landscape in India</h2>
        <p className="mi-subtitle">
          Understanding today's dynamic startup ecosystem and opportunities
        </p>
      </div>

      {/* Component 62 — StartupCard grid */}
      <div className="mi-grid">
        {insights.map((item) => (
          <StartupCard key={item.title} {...item} />
        ))}
      </div>

      {/* Component 63 — ExploreFunding banner */}
      <ExploreFunding />

    </section>
  );
}