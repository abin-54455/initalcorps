import PremiumCard from "../../components/sreekaanth/PremiumCard";

export const premiumServices = [
  {
    title: "Company Incorporation",
    subtitle: "Private Limited, LLP, OPC, Partnership",
    price: "₹12,999",
    duration: "3-7 days",
    popular: true,
    category: "Incorporation",
    description:
      "Launch your business in record time with our premium incorporation service — featuring a dedicated account manager, priority MCA filing, and end-to-end support so you can start operating sooner.",
    features: ["Dedicated Account Manager", "Priority MCA Filing", "Free Name Reservation", "Same-day DSC Issuance", "Certificate of Incorporation"],
    documentsRequired: ["PAN Card of Directors", "Aadhaar Card", "Address Proof", "Utility Bill (not older than 2 months)", "Passport-size Photos", "Registered Office Proof"]
  },
  {
    title: "Trademark Registration",
    subtitle: "Protect your brand identity nationwide",
    price: "₹9,999",
    duration: "10-15 months",
    category: "Certification",
    description:
      "Get comprehensive brand protection with an in-depth trademark search, professional logo review, and coverage across multiple classes — backed by priority handling at every stage.",
    features: ["Comprehensive TM Search", "Logo Design Review", "3 Class Coverage", "Priority Filing", "Dedicated IP Consultant"],
    documentsRequired: ["Brand Name / Logo", "Applicant ID Proof", "Address Proof", "Business Registration Certificate", "Power of Attorney (Form TM-48)"]
  },
  {
    title: "ISO Certification",
    subtitle: "ISO 9001, 14001, 27001, 45001",
    price: "₹34,999",
    duration: "30-45 days",
    category: "Certification",
    description:
      "Achieve multi-site ISO certification with a dedicated consultant guiding your team through documentation, employee training, and audit readiness from start to finish.",
    features: ["Multi-site Certification", "Dedicated Consultant", "Employee Training", "Mock Audit", "Certification Body Coordination"],
    documentsRequired: ["Company PAN", "Business Registration Proof", "Process & Quality Manuals", "Organization Chart", "Site Address Proof"]
  },
  {
    title: "GST Registration",
    subtitle: "GST registration & compliance",
    price: "₹5,999",
    duration: "1-3 days",
    category: "Compliance",
    description:
      "Stay ahead of compliance with quarterly CFO-level reviews, proactive ITC maximization, and a GST health check that catches issues before they become penalties.",
    features: ["GST Health Check", "Quarterly CFO Review", "ITC Maximization", "Priority Return Filing", "Dedicated GST Advisor"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Account Statement", "Photograph of Proprietor/Partners"]
  },
  {
    title: "Annual Compliance",
    subtitle: "ROC filing, tax returns, audits",
    price: "₹24,999/yr",
    duration: "Ongoing",
    popular: true,
    category: "Compliance",
    description:
      "Get boardroom-level visibility into your compliance status with monthly MIS reports, proactive CFO advisory, and tax planning that goes beyond just meeting deadlines.",
    features: ["Monthly MIS Reports", "CFO Advisory", "Tax Planning", "ROC Annual Returns", "Statutory Audit Support"],
    documentsRequired: ["Financial Statements", "Bank Statements", "Previous Year ITR", "Board Meeting Minutes", "Audit Report"]
  },
  {
    title: "Business Licenses",
    subtitle: "FSSAI, Import-Export, Professional Tax",
    price: "₹7,999",
    duration: "10-20 days",
    category: "Licensing",
    description:
      "Simplify multi-license management with a single bundled application, dedicated inspection coordination, and fast-tracked amendment filing whenever your business needs change.",
    features: ["Multi-license Bundle", "Inspection Coordination", "Amendment Filing", "Renewal Reminders", "Regulatory Liaison"],
    documentsRequired: ["PAN Card", "Address Proof", "Business Registration Certificate", "Photograph of Owner", "NOC from Premises Owner"]
  },
  {
    title: "Legal Documentation",
    subtitle: "Contracts, agreements, NDAs",
    price: "₹4,999",
    duration: "1-2 days",
    category: "Compliance",
    description:
      "Get senior lawyer-reviewed contracts with unlimited revisions and e-stamping included, so your agreements are airtight and ready to execute without extra back-and-forth.",
    features: ["Unlimited Revisions", "Senior Lawyer Review", "E-stamping Included", "Same-day Turnaround", "Dedicated Legal Advisor"],
    documentsRequired: ["Party Details (Both Sides)", "PAN Card", "Address Proof", "Business Registration Proof (if applicable)"]
  },
  {
    title: "Startup India",
    subtitle: "DPIIT recognition & benefits",
    price: "₹14,999",
    duration: "5-10 days",
    category: "Incorporation",
    description:
      "Go beyond DPIIT recognition with a professionally reviewed pitch deck, direct investor introductions, and access to government tender opportunities reserved for recognized startups.",
    features: ["Pitch Deck Review", "Investor Introductions", "Tender Access", "DPIIT Certificate", "Tax Exemption Filing"],
    documentsRequired: ["Certificate of Incorporation", "PAN Card", "Business Description / Pitch", "Director/Partner Details", "Website or App Link (if any)"]
  },
  {
    title: "Investment & Funding",
    subtitle: "Seed funding, VC connects",
    price: "₹49,999",
    duration: "15-30 days",
    popular: true,
    category: "Incorporation",
    description:
      "Walk into investor meetings fully prepared with direct VC introductions, professional due diligence support, and expert guidance through term sheet negotiations.",
    features: ["VC Introductions", "Due Diligence", "Term Sheet Review", "Business Valuation", "Investor Pitch Deck"],
    documentsRequired: ["Financial Statements", "Business Plan", "Cap Table (if existing)", "Incorporation Certificate", "Founder Profiles"]
  }
];

const PremiumServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {premiumServices.map((service, index) => (
        <PremiumCard
          key={index}
          title={service.title}
          subtitle={service.subtitle}
          price={service.price}
          duration={service.duration}
          features={service.features}
          popular={service.popular}
        />
      ))}
    </div>
  );
};

export default PremiumServices;