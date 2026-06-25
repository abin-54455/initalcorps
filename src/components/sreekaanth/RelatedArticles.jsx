import { useNavigate } from "react-router-dom";
import {
  Building2, PenLine, Award, FileText, TrendingUp, Receipt, Scale
} from "lucide-react";

const CATEGORY_ICONS = {
  Incorporation: Building2,
  Licensing:     PenLine,
  Certification: Award,
  Compliance:    FileText,
  Funding:       TrendingUp,
  Taxation:      Receipt,
  Legal:         Scale,
};

const CATEGORY_COLORS = {
  Incorporation: { bg: "rgba(210,154,78,0.12)", text: "#D09A4E" },
  Licensing:     { bg: "rgba(99,179,237,0.12)",  text: "#63B3ED" },
  Certification: { bg: "rgba(154,210,78,0.12)",  text: "#9AD24E" },
  Compliance:    { bg: "rgba(210,154,78,0.12)",  text: "#D09A4E" },
  Funding:       { bg: "rgba(210,154,78,0.12)",  text: "#D09A4E" },
};

const toArticleSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function RelatedArticles({ currentSlug, allArticles }) {
  const navigate = useNavigate();

  const related = allArticles
    .filter((a) => toArticleSlug(a.title) !== currentSlug)
    .slice(0, 2);

  return (
    <div style={{ marginTop: "8px" }}>
      <h3 style={{
        fontSize: "16px",
        fontWeight: 700,
        color: "#0f172a",
        marginBottom: "16px",
      }}>
        Related Articles
      </h3>

      {/* 2-column card grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "14px",
        marginBottom: "24px",
      }}>
        {related.map((article, i) => {
          const Icon = CATEGORY_ICONS[article.category] || FileText;
          const colors = CATEGORY_COLORS[article.category] || CATEGORY_COLORS.Compliance;
          const slug = toArticleSlug(article.title);

          return (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              onClick={() => {
                navigate(`/article/${slug}`);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Top: icon + category + read time */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "28px", height: "28px",
                  background: colors.bg,
                  borderRadius: "7px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={13} style={{ color: colors.text }} strokeWidth={1.75} />
                </div>
                <span style={{
                  background: colors.bg,
                  color: colors.text,
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: "999px",
                }}>
                  {article.category}
                </span>
                <span style={{ fontSize: "10px", color: "#94a3b8", marginLeft: "auto" }}>
                  {article.readTime} min read
                </span>
              </div>

              {/* Title */}
              <p style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "#0f172a",
                lineHeight: 1.4,
                margin: 0,
              }}>
                {article.title}
              </p>

              {/* Excerpt */}
              <p style={{
                fontSize: "12px",
                color: "#64748b",
                lineHeight: 1.6,
                margin: 0,
                flexGrow: 1,
              }}>
                {article.excerpt}
              </p>

              {/* Read Article */}
              <span style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#D09A4E",
              }}>
                Read Article →
              </span>
            </div>
          );
        })}
      </div>

      {/* Back to All Articles */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            background: "none",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            padding: "10px 24px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#475569",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#f8fafc"}
          onMouseLeave={e => e.currentTarget.style.background = "none"}
        >
          ← Back to All Articles
        </button>
      </div>
    </div>
  );
}