import { MessageCircle } from "lucide-react";

// Article content keyed by slug
const ARTICLE_CONTENT = {
  "complete-guide-to-company-incorporation-in-india": {
    sections: [
      {
        heading: "Understanding Company Incorporation in India",
        body: "Starting a business in India requires proper legal registration. The process of company incorporation ensures your business has legal recognition and credibility in the market.",
      },
      {
        heading: "Types of Business Entities",
        list: [
          { term: "Private Limited Company", detail: "Most popular choice for startups and growing businesses. Offers limited liability protection and easier access to funding." },
          { term: "Limited Liability Partnership (LLP)", detail: "Combines benefits of partnership and company structure. Ideal for professional services." },
          { term: "One Person Company (OPC)", detail: "Perfect for solo entrepreneurs who want corporate structure benefits with single ownership." },
        ],
      },
      {
        heading: "Step-by-Step Process",
        numbered: [
          { term: "Obtain Digital Signature Certificate (DSC)", detail: "Required for all directors to sign electronic documents." },
          { term: "Apply for Director Identification Number (DIN)", detail: "Unique identification for company directors." },
          { term: "Name Reservation", detail: "Submit your preferred company name to MCA for approval." },
          { term: "File Incorporation Documents", detail: "Submit MOA, AOA, and other required documents to the Registrar of Companies." },
          { term: "Obtain Certificate of Incorporation", detail: "Final approval from MCA confirming your company's legal existence." },
        ],
      },
      {
        heading: "Documents Required",
        bullets: [
          "PAN Card and Aadhaar Card of all directors",
          "Address Proof (utility bill, rental agreement)",
          "Passport-size photographs",
          "Registered office proof",
        ],
      },
      {
        heading: "Timeline and Costs",
        body: "Standard process takes 7–14 business days. With premium service and expedited processing, it can be completed in 3–7 days. Government fees vary based on authorised capital.",
      },
      {
        heading: "Post-Incorporation Compliance",
        body: "After incorporation, ensure timely ROC filings, maintain statutory registers, conduct board meetings, and file annual returns to stay compliant.",
      },
    ],
    whatsappText: "Hi, I need help with Company Incorporation",
  },
  "why-your-startup-needs-trademark-protection": {
    sections: [
      {
        heading: "Why Brand Protection Matters",
        body: "Your brand name and logo are among your most valuable business assets. Trademark registration gives you exclusive rights and legal protection against infringement.",
      },
      {
        heading: "What Can Be Trademarked",
        bullets: ["Brand names and wordmarks", "Logos and design marks", "Slogans and taglines", "Unique product shapes or packaging"],
      },
      {
        heading: "Registration Process",
        numbered: [
          { term: "Trademark Search", detail: "Verify availability of your mark across all classes." },
          { term: "Application Filing", detail: "Submit TM-A form to the Trademark Registry." },
          { term: "Examination", detail: "Registry examines for conflicts with existing marks." },
          { term: "Publication", detail: "Mark is published in Trademark Journal for opposition." },
          { term: "Registration", detail: "Certificate issued if no opposition is raised." },
        ],
      },
      {
        heading: "Timeline and Validity",
        body: "Initial registration takes 12–18 months. Once registered, a trademark is valid for 10 years and can be renewed indefinitely, giving you permanent brand protection.",
      },
    ],
    whatsappText: "Hi, I need help with Trademark Registration",
  },
  "iso-certification-benefits-for-indian-businesses": {
    sections: [
      {
        heading: "What is ISO Certification?",
        body: "ISO certifications are internationally recognised standards that demonstrate your business meets quality, safety, and efficiency benchmarks. They signal trust to customers and partners.",
      },
      {
        heading: "Popular ISO Standards",
        list: [
          { term: "ISO 9001", detail: "Quality Management Systems — the most widely adopted standard globally." },
          { term: "ISO 14001", detail: "Environmental Management Systems — for businesses committed to sustainability." },
          { term: "ISO 27001", detail: "Information Security Management — critical for IT and data-handling businesses." },
          { term: "ISO 45001", detail: "Occupational Health & Safety — ensures a safe working environment." },
        ],
      },
      {
        heading: "Certification Process",
        numbered: [
          { term: "Gap Analysis", detail: "Identify areas where current practices differ from ISO requirements." },
          { term: "Documentation", detail: "Prepare quality manuals, procedures, and work instructions." },
          { term: "Implementation", detail: "Roll out processes and train employees." },
          { term: "Internal Audit", detail: "Verify compliance before the external audit." },
          { term: "Certification Audit", detail: "Third-party body conducts the final audit and issues the certificate." },
        ],
      },
      {
        heading: "Business Benefits",
        bullets: [
          "Improved customer trust and credibility",
          "Access to government tenders requiring ISO certification",
          "Streamlined internal processes reducing waste",
          "Competitive advantage in domestic and global markets",
        ],
      },
    ],
    whatsappText: "Hi, I need help with ISO Certification",
  },
  "gst-compliance-checklist-for-small-businesses": {
    sections: [
      {
        heading: "Why GST Compliance Matters",
        body: "Non-compliance with GST regulations can attract heavy penalties, interest, and even cancellation of your GSTIN. Staying compliant protects your business from legal risk.",
      },
      {
        heading: "Monthly Compliance Checklist",
        numbered: [
          { term: "GSTR-1 Filing", detail: "Report outward supplies by the 11th of the following month." },
          { term: "GSTR-3B Filing", detail: "Summary return with tax payment by the 20th of the following month." },
          { term: "ITC Reconciliation", detail: "Match input tax credit with GSTR-2B every month." },
          { term: "E-invoicing", detail: "Mandatory for businesses above ₹5 crore turnover." },
          { term: "Payment of Tax", detail: "Ensure GST liability is paid to avoid interest at 18% per annum." },
        ],
      },
      {
        heading: "Annual Compliance",
        bullets: [
          "File GSTR-9 (annual return) by 31st December",
          "Reconcile books with GST returns",
          "Get GST audit done if turnover exceeds ₹2 crore",
          "Renew LUT if you export goods/services",
        ],
      },
      {
        heading: "Common Mistakes to Avoid",
        body: "Missing due dates, not reconciling ITC, ignoring e-invoicing requirements, and failing to update business details on the GST portal are the most common compliance failures.",
      },
    ],
    whatsappText: "Hi, I need help with GST Compliance",
  },
  "funding-options-for-indian-startups-in-2026": {
    sections: [
      {
        heading: "The Funding Landscape in 2026",
        body: "Despite global headwinds, Indian startups raised $10.9B in 2025. In 2026, investors are focusing on profitability, sustainable unit economics, and strong founding teams.",
      },
      {
        heading: "Funding Stages",
        list: [
          { term: "Bootstrapping", detail: "Self-funding using personal savings or revenue. Ideal for early validation." },
          { term: "Angel Investment", detail: "HNIs investing ₹25L–₹2Cr in exchange for equity. Best for pre-seed stage." },
          { term: "Seed Funding", detail: "₹2Cr–₹10Cr from micro-VCs or angel networks for product development." },
          { term: "Series A & Beyond", detail: "Institutional VC funding for scaling proven business models." },
        ],
      },
      {
        heading: "Government Schemes",
        bullets: [
          "Startup India Seed Fund Scheme (SISFS) — up to ₹20 lakhs",
          "SIDBI Fund of Funds — for DPIIT-recognised startups",
          "MSME Credit Guarantee Scheme — collateral-free loans",
          "State-level startup grants and incubation programmes",
        ],
      },
      {
        heading: "Getting Investor Ready",
        numbered: [
          { term: "Business Valuation", detail: "Get a professional valuation before approaching investors." },
          { term: "Financial Projections", detail: "Prepare 3–5 year projections with clear assumptions." },
          { term: "Pitch Deck", detail: "A 10–12 slide deck covering problem, solution, market, and traction." },
          { term: "Cap Table", detail: "Clean ownership structure with no undocumented agreements." },
          { term: "Due Diligence Pack", detail: "Legal, financial, and operational documents ready for investor review." },
        ],
      },
    ],
    whatsappText: "Hi, I need help with Investment & Funding",
  },
  "annual-compliance-requirements-for-pvt-ltd-companies": {
    sections: [
      {
        heading: "Why Annual Compliance is Non-Negotiable",
        body: "Failure to meet annual compliance deadlines attracts significant penalties from MCA and the Income Tax department. Directors can be disqualified for prolonged non-compliance.",
      },
      {
        heading: "ROC Filings",
        numbered: [
          { term: "MGT-7 (Annual Return)", detail: "File by 60 days from AGM — typically by 29th November." },
          { term: "AOC-4 (Financial Statements)", detail: "File by 30 days from AGM — typically by 29th October." },
          { term: "ADT-1 (Auditor Appointment)", detail: "File within 15 days of AGM." },
          { term: "DIR-3 KYC", detail: "Annual KYC for all directors by 30th September." },
        ],
      },
      {
        heading: "Income Tax Compliance",
        bullets: [
          "File ITR-6 by 31st October (for companies requiring audit)",
          "Advance tax payments in quarterly instalments",
          "TDS returns (24Q/26Q) filed quarterly",
          "Tax audit report in Form 3CA/3CB by 30th September",
        ],
      },
      {
        heading: "Board & Shareholder Meetings",
        body: "Hold a minimum of 4 board meetings per year with not more than 120 days gap between two consecutive meetings. An AGM must be held within 6 months of financial year end.",
      },
      {
        heading: "Statutory Registers",
        bullets: [
          "Register of Members (MGT-1)",
          "Register of Directors and KMP",
          "Register of Charges",
          "Minutes of Board and General Meetings",
        ],
      },
    ],
    whatsappText: "Hi, I need help with Annual Compliance",
  },
};

const WHATSAPP_NUMBER = "919876543210";

export default function AboutArticle({ slug }) {
  const toSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const content = ARTICLE_CONTENT[slug] || ARTICLE_CONTENT["complete-guide-to-company-incorporation-in-india"];
  const { sections, whatsappText } = content;

  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "14px",
      padding: "32px 36px",
      marginBottom: "24px",
    }}>
      {sections.map((section, i) => (
        <div key={i} style={{ marginBottom: i < sections.length - 1 ? "28px" : 0 }}>
          {/* Section heading */}
          <h2 style={{
            fontSize: "17px",
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}>
            {section.heading}
          </h2>

          {/* Plain body text */}
          {section.body && (
            <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.75, margin: 0 }}>
              {section.body}
            </p>
          )}

          {/* Definition list (bold term + detail) */}
          {section.list && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {section.list.map((item, j) => (
                <li key={j} style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65 }}>
                  <span style={{ fontWeight: 700, color: "#0f172a" }}>{item.term}: </span>
                  {item.detail}
                </li>
              ))}
            </ul>
          )}

          {/* Numbered steps */}
          {section.numbered && (
            <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {section.numbered.map((item, j) => (
                <li key={j} style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, display: "flex", gap: "8px" }}>
                  <span style={{ fontWeight: 700, color: "#D09A4E", flexShrink: 0 }}>{j + 1}.</span>
                  <span>
                    <span style={{ fontWeight: 700, color: "#0f172a" }}>{item.term}: </span>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ol>
          )}

          {/* Bullet list */}
          {section.bullets && (
            <ul style={{ padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px", listStyle: "none" }}>
              {section.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, display: "flex", gap: "8px", alignItems: "flex-start" }}>
                  <span style={{ color: "#D09A4E", marginTop: "6px", flexShrink: 0, fontSize: "7px" }}>●</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {/* CTA bar */}
      <div style={{
        marginTop: "32px",
        padding: "18px 22px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "16px",
        flexWrap: "wrap",
      }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a", margin: "0 0 2px" }}>
            Need Help With This Service?
          </p>
          <p style={{ fontSize: "12px", color: "#64748b", margin: 0 }}>
            Our experts are ready to assist you — get a free consultation today.
          </p>
        </div>
        <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
          <button style={{
            background: "#123B73",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "10px 18px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
          }}>
            View Services
          </button>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <MessageCircle size={14} /> WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}