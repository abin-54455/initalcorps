import { useEffect } from "react";
import { Gift } from "lucide-react";
import DealsCard from "./DealsCard";

const deals = [
  {
    offerId: "OFFER-2026-001",
    discount: "20%",
    title: "New Year Special",
    description: "Flat 20% off on all incorporation services",
    validUntil: "2026-12-31",
  },
  {
    offerId: "OFFER-2026-002",
    discount: "30%",
    title: "Summer Sale",
    description: "Get 30% discount on GST registration",
    validUntil: "2026-08-31",
  },
  {
    offerId: "OFFER-2026-003",
    discount: "15%",
    title: "ISO Special",
    description: "15% off on ISO certification packages",
    validUntil: "2026-09-30",
  },
];

const CSS = `
  .dd-section {
    width: 100%;
    background: #0a1628;
    padding: 0 40px 72px;
    box-sizing: border-box;
  }
  .dd-inner {
    max-width: 1200px; margin: 0 auto;
    border-top: 1px solid rgba(255,255,255,0.07);
    padding-top: 64px;
  }
  .dd-header { text-align: center; margin-bottom: 44px; }
  .dd-eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(210,154,78,0.35);
    border-radius: 999px;
    padding: 5px 16px 5px 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    color: rgba(255,255,255,0.55); margin-bottom: 20px;
  }
  .dd-eyebrow-icon { color: #D09A4E; }
  .dd-title {
    font-size: clamp(26px, 3.5vw, 40px);
    font-weight: 800; color: #ffffff;
    margin: 0 0 12px; letter-spacing: -0.3px;
  }
  .dd-subtitle { font-size: 15px; color: rgba(255,255,255,0.45); margin: 0; }
  .dd-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (max-width: 1024px) {
    .dd-section { padding: 0 28px 56px; }
    .dd-inner { padding-top: 48px; }
    .dd-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .dd-section { padding: 0 16px 48px; }
    .dd-inner { padding-top: 40px; }
    .dd-grid { grid-template-columns: 1fr; gap: 14px; }
    .dd-title { font-size: 24px; }
    .dd-subtitle { font-size: 13px; }
  }
`;

export default function DealsDiscounts() {
  useEffect(() => {
    const id = "deals-discounts-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const handleClaim = (deal) => {
    const msg = encodeURIComponent(`Hi, I'd like to claim the ${deal.title} offer (${deal.offerId}) — ${deal.discount} off`);
    window.open(`https://wa.me/919876543210?text=${msg}`, "_blank");
  };

  return (
    <section className="dd-section">
      <div className="dd-inner">

        {/* Header */}
        <div className="dd-header">
          <div className="dd-eyebrow">
            <Gift size={12} strokeWidth={2.5} className="dd-eyebrow-icon" />
            LIMITED TIME OFFERS
          </div>
          <h2 className="dd-title">Exclusive Deals &amp; Discounts</h2>
          <p className="dd-subtitle">
            Take advantage of our special offers and save on premium legal services
          </p>
        </div>

        {/* Cards grid */}
        <div className="dd-grid">
          {deals.map((deal, i) => (
            <DealsCard
              key={i}
              offerId={deal.offerId}
              discount={deal.discount}
              title={deal.title}
              description={deal.description}
              validUntil={deal.validUntil}
              onClaim={() => handleClaim(deal)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}