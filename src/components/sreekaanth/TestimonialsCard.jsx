// Component 72 — individual testimonial card
export default function TestimonialsCard({ rating, review, name, designation }) {
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e8ecf2",
      borderRadius: "16px",
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
      height: "100%",
      boxSizing: "border-box",
    }}>
      {/* Stars + quote icon row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        {/* Stars */}
        <div style={{ display: "flex", gap: "3px" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="18" height="18" viewBox="0 0 20 20" fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27l-4.94 2.43.94-5.49-4-3.9 5.53-.8L10 1.5z"
                fill={i < rating ? "#D09A4E" : "#e2e8f0"}
              />
            </svg>
          ))}
        </div>

        {/* Quote icon */}
        <div style={{
          width: "34px", height: "34px",
          background: "#fdf3e7",
          borderRadius: "8px",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#D09A4E">
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
          </svg>
        </div>
      </div>

      {/* Review text — highlighted keywords in gold */}
      <p style={{
        fontSize: "14px",
        color: "#334155",
        lineHeight: 1.75,
        margin: 0,
        flexGrow: 1,
      }}>
        {review.split(/(\*[^*]+\*)/g).map((part, i) =>
          part.startsWith("*") && part.endsWith("*") ? (
            <span key={i} style={{ color: "#D09A4E", fontWeight: 500 }}>
              {part.slice(1, -1)}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>

      {/* Divider */}
      <div style={{ height: "1px", background: "#f1f5f9" }} />

      {/* Author */}
      <div>
        <p style={{ fontSize: "14px", fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>
          {name}
        </p>
        <p style={{ fontSize: "12px", color: "#94a3b8", margin: 0 }}>
          {designation}
        </p>
      </div>
    </div>
  );
}