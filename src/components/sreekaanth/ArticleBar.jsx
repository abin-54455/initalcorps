import {
  Building2,
  PenLine,
  Award,
  FileText,
  TrendingUp,
  Receipt,
  Scale,
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
  Incorporation: { bg: "rgba(210,154,78,0.18)", text: "#D09A4E" },
  Licensing: { bg: "rgba(99,179,237,0.18)", text: "#63B3ED" },
  Certification: { bg: "rgba(154,210,78,0.18)", text: "#9AD24E" },
  Compliance: { bg: "rgba(210,154,78,0.18)", text: "#D09A4E" },
  Funding: { bg: "rgba(210,154,78,0.18)", text: "#D09A4E" },
  Taxation: { bg: "rgba(99,179,237,0.18)", text: "#63B3ED" },
  Legal: { bg: "rgba(154,210,78,0.18)", text: "#9AD24E" },
};

export default function ArticleBar({
  category,
  readTime,
  title,
  excerpt,
}) {
  const Icon = CATEGORY_ICONS[category] || FileText;
  const colors = CATEGORY_COLORS[category] || CATEGORY_COLORS.Compliance;

  return (
    <div
      style={{
        background: "linear-gradient(135deg,#0d1f3c,#0a1628)",
        borderRadius: 14,
        padding: "28px 30px 30px",
        marginBottom: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 18,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            background: "rgba(210,154,78,.12)",
            border: "1px solid rgba(210,154,78,.25)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={15} color="#D09A4E" />
        </div>

        <span
          style={{
            background: colors.bg,
            color: colors.text,
            fontSize: 11,
            fontWeight: 600,
            padding: "3px 10px",
            borderRadius: 999,
          }}
        >
          {category}
        </span>

        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,.35)",
          }}
        >
          ● {readTime} min read
        </span>
      </div>

      <h1
        style={{
          fontSize: "clamp(20px,3vw,28px)",
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1.35,
          marginBottom: 14,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: 14,
          color: "rgba(255,255,255,.5)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {excerpt}
      </p>
    </div>
  );
}