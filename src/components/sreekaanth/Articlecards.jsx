import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import ViewArticles from "./ViewArticles";

const toArticleSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const articles = [
  {
    category: "Incorporation",
    readTime: 5,
    title: "Complete Guide to Company Incorporation in India",
    excerpt:
      "Everything you need to know about registering a Private Limited Company, LLP, or OPC in India — from documentation to timelines.",
  },
  {
    category: "Licensing",
    readTime: 4,
    title: "Why Your Startup Needs Trademark Protection",
    excerpt:
      "Learn how trademark registration safeguards your brand identity and prevents infringement in the competitive Indian market.",
  },
  {
    category: "Certification",
    readTime: 6,
    title: "ISO Certification: Benefits for Indian Businesses",
    excerpt:
      "Discover how ISO 9001, 14001, and 27001 certifications can boost credibility, improve operations, and open new market opportunities.",
  },
  {
    category: "Compliance",
    readTime: 7,
    title: "GST Compliance Checklist for Small Businesses",
    excerpt:
      "A comprehensive checklist to ensure your business stays GST-compliant and avoids penalties from tax authorities.",
  },
  {
    category: "Funding",
    readTime: 8,
    title: "Funding Options for Indian Startups in 2026",
    excerpt:
      "Explore various funding routes including angel investors, VCs, government schemes, and bootstrapping strategies for your startup.",
  },
  {
    category: "Compliance",
    readTime: 5,
    title: "Annual Compliance Requirements for Pvt Ltd Companies",
    excerpt:
      "Stay on top of ROC filings, board meetings, tax returns, and other annual compliance requirements to avoid penalties.",
  },
];

const CSS = `
  .ac-section {
    width: 100%;
    background: #0a1628;
    padding: 64px 40px 0;
    box-sizing: border-box;
  }
  .ac-inner { max-width: 1200px; margin: 0 auto; padding-bottom: 64px; }
  .ac-header { text-align: center; margin-bottom: 40px; }
  .ac-eyebrow {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
    border-radius: 999px; padding: 5px 14px 5px 10px;
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
    color: rgba(255,255,255,0.55); margin-bottom: 20px;
  }
  .ac-eyebrow-icon { color: #D09A4E; }
  .ac-title { font-size: clamp(24px, 3.5vw, 38px); font-weight: 800; color: #ffffff; margin: 0 0 12px; letter-spacing: -0.3px; }
  .ac-subtitle { font-size: 15px; color: rgba(255,255,255,0.45); margin: 0; }
  .ac-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }

  @media (max-width: 1024px) {
    .ac-section { padding: 48px 28px 0; }
    .ac-inner { padding-bottom: 48px; }
    .ac-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .ac-section { padding: 40px 16px 0; }
    .ac-inner { padding-bottom: 40px; }
    .ac-grid { grid-template-columns: 1fr; gap: 12px; }
    .ac-title { font-size: 24px; }
    .ac-subtitle { font-size: 13px; }
  }
`;

export default function ArticleCards() {
  const navigate = useNavigate();

  useEffect(() => {
    const id = "article-cards-styles";
    if (!document.getElementById(id)) {
      const tag = document.createElement("style");
      tag.id = id;
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  const handleReadMore = (title) => {
    navigate(`/article/${toArticleSlug(title)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="ac-section">
      <div className="ac-inner">
        <div className="ac-header">
          <div className="ac-eyebrow">
            <BookOpen size={12} strokeWidth={2.5} className="ac-eyebrow-icon" />
            KNOWLEDGE HUB
          </div>
          <h2 className="ac-title">Articles About Our Services</h2>
          <p className="ac-subtitle">
            Expert insights on legal and compliance matters for Indian businesses
          </p>
        </div>

        <div className="ac-grid">
          {articles.map((article, i) => (
            <ViewArticles
              key={i}
              category={article.category}
              readTime={article.readTime}
              title={article.title}
              excerpt={article.excerpt}
              onReadMore={() => handleReadMore(article.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}