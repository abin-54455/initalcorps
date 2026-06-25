const OFFER_IMAGES = {
  "OFFER-2026-001": "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600&q=80",
  "OFFER-2026-002": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  "OFFER-2026-003": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
};

export default function DealsCard({ offerId, discount, title, description, validUntil, onClaim }) {
  const imageUrl = OFFER_IMAGES[offerId] || OFFER_IMAGES["OFFER-2026-001"];

  return (
    <div style={{
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "16px",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      transition: "border-color 0.2s, transform 0.2s",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(210,154,78,0.5)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image area with discount badge + offer ID overlay */}
      <div style={{ position: "relative", height: "190px", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={title}
          style={{
            width: "100%", height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,22,40,0.55) 100%)",
        }} />

        {/* Discount badge — top right */}
        <div style={{
          position: "absolute", top: "14px", right: "14px",
          background: "#D09A4E",
          color: "#ffffff",
          fontWeight: 800,
          fontSize: "13px",
          padding: "6px 14px",
          borderRadius: "999px",
          letterSpacing: "0.02em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        }}>
          {discount} OFF
        </div>

        {/* Offer ID — bottom left */}
        <div style={{
          position: "absolute", bottom: "12px", left: "14px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.6)",
          fontFamily: "monospace",
          letterSpacing: "0.05em",
        }}>
          ID: {offerId}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 20px 22px", display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
        <h3 style={{
          fontSize: "16px",
          fontWeight: 700,
          color: "#ffffff",
          margin: 0,
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        <p style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.55)",
          margin: 0,
          lineHeight: 1.6,
        }}>
          {description}
        </p>

        {/* Valid until + Claim button row */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "10px",
          gap: "12px",
        }}>
          <div>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: "0 0 2px" }}>
              Valid until
            </p>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#D09A4E", margin: 0 }}>
              {validUntil}
            </p>
          </div>

          <button
            onClick={onClaim}
            style={{
              background: "#D09A4E",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 22px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#b8863e"}
            onMouseLeave={e => e.currentTarget.style.background = "#D09A4E"}
          >
            Claim Offer
          </button>
        </div>
      </div>
    </div>
  );
}