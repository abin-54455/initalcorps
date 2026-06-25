import {
  Building2, PenLine, Award, Receipt, ClipboardCheck,
  ScrollText, FileText, Rocket, TrendingUp, Scale
} from "lucide-react";

const CATEGORY_ICONS = {
  Incorporation: Building2,
  Licensing: PenLine,
  Certification: Award,
  Compliance: FileText,
  Funding: TrendingUp,
  Taxation: Receipt,
  Legal: Scale,
};

const CATEGORY_COLORS = {
  Incorporation: { bg: "rgba(210,154,78,0.15)", text: "#D09A4E" },
  Licensing:     { bg: "rgba(99,179,237,0.15)",  text: "#63B3ED" },
  Certification: { bg: "rgba(154,210,78,0.15)",  text: "#9AD24E" },
  Compliance:    { bg: "rgba(210,154,78,0.15)",  text: "#D09A4E" },
  Funding:       { bg: "rgba(210,154,78,0.15)",  text: "#D09A4E" },
  Taxation:      { bg: "rgba(99,179,237,0.15)",  text: "#63B3ED" },
  Legal:         { bg: "rgba(154,210,78,0.15)",  text: "#9AD24E" },
};

export default function ViewArticles({ category, readTime, title, excerpt, onReadMore }) {
  const Icon = CATEGORY_ICONS[category] || FileText;
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Compliance;

  return (
    <div
      className="va-card"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: "14px",
        padding: "22px 24px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        cursor: "default",
        transition: "background 0.2s, border-color 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.07)";
        e.currentTarget.style.borderColor = "rgba(210,154,78,0.35)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "rgba(255,255,255,0.04)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
      }}
    >
      {/* Top row: icon + category + read time */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Icon box */}
          <div style={{
            width: "34px", height: "34px",
            background: "rgba(210,154,78,0.12)",
            border: "1px solid rgba(210,154,78,0.25)",
            borderRadius: "8px",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Icon size={16} style={{ color: "#D09A4E" }} strokeWidth={1.75} />
          </div>

          {/* Category badge */}
          <span style={{
            background: colors.bg,
            color: colors.text,
            fontSize: "11px",
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: "999px",
            letterSpacing: "0.01em",
          }}>
            {category}
          </span>
        </div>

        {/* Read time */}
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", whiteSpace: "nowrap" }}>
          {readTime} min read
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: "15px",
        fontWeight: 700,
        color: "#ffffff",
        lineHeight: 1.45,
        margin: 0,
      }}>
        {title}
      </h3>

      {/* Excerpt */}
      <p style={{
        fontSize: "13px",
        color: "rgba(255,255,255,0.5)",
        lineHeight: 1.65,
        margin: 0,
        flexGrow: 1,
      }}>
        {excerpt}
      </p>

      {/* Read More */}
      <button
        onClick={onReadMore}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          color: "#D09A4E",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.01em",
          alignSelf: "flex-start",
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      >
        Read More →
      </button>
    </div>
  );
}