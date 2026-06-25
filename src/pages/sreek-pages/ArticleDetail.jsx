import { useParams, Navigate } from "react-router-dom";

import ArticleBar from "../../components/sreekaanth/ArticleBar";
import AboutArticle from "../../components/sreekaanth/AboutArticle";
import RelatedArticles from "../../components/sreekaanth/RelatedArticles";

const toArticleSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const allArticles = [
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

export default function ArticleDetail() {
  const { slug } = useParams();

  const article = allArticles.find((a) => toArticleSlug(a.title) === slug);
  if (!article) return <Navigate to="/" replace />;

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F8F9FB",
      padding: "32px 16px 48px",
    }}>
      <div style={{ maxWidth: "820px", margin: "0 auto" }}>

        {/* 66 — Article Bar */}
        <ArticleBar
          category={article.category}
          readTime={article.readTime}
          title={article.title}
          excerpt={article.excerpt}
        />

        {/* 67 — About Article */}
        <AboutArticle slug={slug} />

        {/* 68 — Related Articles */}
        <RelatedArticles
          currentSlug={slug}
          allArticles={allArticles}
        />

      </div>
    </div>
  );
}