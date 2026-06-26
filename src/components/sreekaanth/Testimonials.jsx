import { useEffect } from "react";
import { Star } from "lucide-react";
import TestimonialsCard from "./TestimonialsCard";

// Component 71 — full testimonials section
const reviews = [
  {
    rating: 5,
    review:
      "LegalWorks made company *incorporation* incredibly smooth. Got my Pvt Ltd registered in just 5 days with *premium* service. Their team handled everything from name approval to getting the certificate. Highly recommended!",
    name: "Priya Sharma",
    designation: "Founder, TechVista Solutions Pvt Ltd",
  },
  {
    rating: 5,
    review:
      "We needed *ISO 9001* certification for a major client. LegalWorks guided us through the entire process, from documentation to final audit. Achieved certification in *35 days*. Outstanding support throughout!",
    name: "Arjun Mehta",
    designation: "CEO, GreenEarth Organics",
  },
  {
    rating: 5,
    review:
      "The *trademark registration* service was excellent. They handled our objections professionally and we got our *TM* registered. The premium investor connect service also helped us close our seed round. Worth every rupee!",
    name: "Neha Gupta",
    designation: "Co-founder, StyleHub Fashion",
  },
];

const CSS = `
  .tm-section {
    background: #f8f9fb;
    padding: 64px 40px 72px;
    box-sizing: border-box;
  }
  .tm-inner { max-width: 1200px; margin: 0 auto; }
  .tm-header { text-align: center; margin-bottom: 44px; }
  .tm-eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 999px;
    padding: 5px 16px 5px 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    color: #64748b; margin-bottom: 20px;
  }
  .tm-eyebrow-icon { color: #D09A4E; }
  .tm-title {
    font-size: clamp(26px, 3.5vw, 40px);
    font-weight: 900; color: #0f172a;
    margin: 0 0 12px; letter-spacing: -0.4px;
  }
  .tm-subtitle { font-size: 15px; color: #64748b; margin: 0; }
  .tm-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 1024px) {
    .tm-section { padding: 48px 28px 56px; }
    .tm-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .tm-section { padding: 40px 16px 48px; }
    .tm-grid { grid-template-columns: 1fr; gap: 14px; }
    .tm-title { font-size: 24px; }
    .tm-subtitle { font-size: 13px; }
  }
`;

export default function Testimonials() {
  useEffect(() => {
    const id = "testimonials-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <section className="tm-section">
      <div className="tm-inner">

        {/* Header */}
        <div className="tm-header">
          <div className="tm-eyebrow">
            <Star size={12} strokeWidth={2.5} fill="#D09A4E" className="tm-eyebrow-icon" />
            TESTIMONIALS
          </div>
          <h2 className="tm-title">What Our Clients Say</h2>
          <p className="tm-subtitle">
            Real stories from businesses we've helped achieve their goals
          </p>
        </div>

        {/* Cards grid */}
        <div className="tm-grid">
          {reviews.map((r, i) => (
            <TestimonialsCard key={i} {...r} />
          ))}
        </div>

      </div>
    </section>
  );
}