import { Briefcase, MessageCircle } from "lucide-react";

// Component 73 — dark navy footer
const WHATSAPP_NUMBER = "919876543210";

const links = {
  Services: [
    "Company Registration",
    "Trademark Filing",
    "ISO Certification",
    "GST Registration",
  ],
  Company: [
    "About Us",
    "Our Team",
    "Careers",
    "Contact",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Refund Policy",
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: "#0d1f3c",
      color: "#ffffff",
      padding: "52px 40px 0",
      boxSizing: "border-box",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
          gap: "40px",
          paddingBottom: "44px",
        }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{
                width: "36px", height: "36px",
                background: "rgba(210,154,78,0.15)",
                border: "1px solid rgba(210,154,78,0.3)",
                borderRadius: "9px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Briefcase size={17} style={{ color: "#D09A4E" }} strokeWidth={1.75} />
              </div>
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
                InitialCorps Legal
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, margin: 0, maxWidth: "220px" }}>
              Your trusted partner for corporate legal services across India.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p style={{
                fontSize: "13px", fontWeight: 700,
                color: "#ffffff", marginBottom: "16px",
                letterSpacing: "0.02em",
              }}>
                {heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#D09A4E"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
                    >
                      {item}
                    </a>
                  </li>
                ))}

                {/* WhatsApp Support only under Legal */}
                {heading === "Legal" && (
                  <li>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        color: "#4ade80",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontWeight: 600,
                      }}
                    >
                      <MessageCircle size={13} /> WhatsApp Support
                    </a>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

        {/* Bottom copyright bar */}
        <div style={{
          padding: "18px 0",
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
        }}>
          © 2026 InitialCorps Legal. All rights reserved. Registered with Ministry of Corporate Affairs.
        </div>

      </div>

      {/* Responsive style */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          footer { padding: 40px 16px 0 !important; }
        }
      `}</style>
    </footer>
  );
}