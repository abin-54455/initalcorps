import BasicCard from "../../components/sreekaanth/BasicCard";

export const basicServices = [
  {
    title: "Company Incorporation",
    subtitle: "Private Limited, LLP, OPC, Partnership",
    price: "₹6,999",
    duration: "7-14 days",
    popular: true,
    category: "Incorporation",
    description:
      "Incorporate your business legally in India with complete end-to-end assistance. We handle name reservation, digital signature certificates, DIN, MOA & AOA drafting, and obtain your Certificate of Incorporation from MCA.",
    features: ["PAN & TAN", "DSC (2 Directors)", "MOA & AOA Drafting", "Certificate of Incorporation", "MCA Registration"],
    documentsRequired: ["PAN Card of Directors", "Aadhaar Card", "Address Proof", "Utility Bill (not older than 2 months)", "Passport-size Photos", "Registered Office Proof"]
  },
  {
    title: "Trademark Registration",
    subtitle: "Protect your brand identity nationwide",
    price: "₹4,999",
    duration: "12-18 months",
    category: "Certification",
    description:
      "Secure exclusive rights to your brand name, logo, or slogan with a complete trademark registration service. We conduct a thorough search, prepare and file your application, and represent you through the examination process.",
    features: ["TM Search Report", "Application Filing", "Objection Handling (1)", "Trademark Class Selection", "Certificate of Registration"],
    documentsRequired: ["Brand Name / Logo", "Applicant ID Proof", "Address Proof", "Business Registration Certificate", "Power of Attorney (Form TM-48)"]
  },
  {
    title: "ISO Certification",
    subtitle: "ISO 9001, 14001, 27001, 45001",
    price: "₹18,999",
    duration: "45-60 days",
    category: "Certification",
    description:
      "Get internationally recognized ISO certification for your business with our structured, audit-ready process — covering gap analysis, documentation, and final certification support across all major ISO standards.",
    features: ["Gap Analysis Report", "Documentation Support", "Internal Audit Support", "Certification Body Coordination", "Final Audit Assistance"],
    documentsRequired: ["Company PAN", "Business Registration Proof", "Process & Quality Manuals", "Organization Chart", "Site Address Proof"]
  },
  {
    title: "GST Registration",
    subtitle: "GST registration & compliance",
    price: "₹2,499",
    duration: "3-7 days",
    category: "Compliance",
    description:
      "Get your business GST-registered and stay compliant with ongoing monthly filings. We handle the entire registration process and manage your input tax credit and return filing every month.",
    features: ["GSTIN Procurement", "Monthly Return Filing", "ITC Management", "HSN Code Classification", "GST Invoice Setup"],
    documentsRequired: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Account Statement", "Photograph of Proprietor/Partners"]
  },
  {
    title: "Annual Compliance",
    subtitle: "ROC filing, tax returns, audits",
    price: "₹9,999/yr",
    duration: "Ongoing",
    popular: true,
    category: "Compliance",
    description:
      "Stay on top of every statutory deadline with our annual compliance package — covering ROC filings, income tax returns, and statutory audit coordination so your business remains fully compliant year-round.",
    features: ["ROC Annual Returns", "Income Tax Filing", "Statutory Audit Support", "Board Resolution Drafting", "Compliance Calendar Tracking"],
    documentsRequired: ["Financial Statements", "Bank Statements", "Previous Year ITR", "Board Meeting Minutes", "Audit Report"]
  },
  {
    title: "Business Licenses",
    subtitle: "FSSAI, Import-Export, Professional Tax",
    price: "₹3,999",
    duration: "15-30 days",
    category: "Licensing",
    description:
      "Operate without interruption with the right licenses in place. We handle applications, renewals, and amendments across FSSAI, Import-Export Code, and Professional Tax registrations.",
    features: ["License Application", "Annual Renewals", "Modification Filing", "Regulatory Liaison", "Compliance Tracking"],
    documentsRequired: ["PAN Card", "Address Proof", "Business Registration Certificate", "Photograph of Owner", "NOC from Premises Owner"]
  },
  {
    title: "Legal Documentation",
    subtitle: "Contracts, agreements, NDAs",
    price: "₹1,999",
    duration: "2-5 days",
    category: "Compliance",
    description:
      "Get legally sound contracts and agreements drafted by experienced professionals — from NDAs to vendor agreements — with a thorough review process to protect your business interests.",
    features: ["Document Drafting", "Legal Review", "Notarization Assistance", "Clause Customization", "Digital & Hard Copy"],
    documentsRequired: ["Party Details (Both Sides)", "PAN Card", "Address Proof", "Business Registration Proof (if applicable)"]
  },
  {
    title: "Startup India",
    subtitle: "DPIIT recognition & benefits",
    price: "₹5,999",
    duration: "10-15 days",
    category: "Incorporation",
    description:
      "Get your startup DPIIT-recognized and unlock tax exemptions, easier compliance, and access to government schemes designed specifically for early-stage businesses.",
    features: ["DPIIT Certificate", "Tax Exemptions", "IPR Fast-track", "Pitch Document Review", "Scheme Eligibility Check"],
    documentsRequired: ["Certificate of Incorporation", "PAN Card", "Business Description / Pitch", "Director/Partner Details", "Website or App Link (if any)"]
  },
  {
    title: "Investment & Funding",
    subtitle: "Seed funding, VC connects",
    price: "₹24,999",
    duration: "30-45 days",
    popular: true,
    category: "Incorporation",
    description:
      "Get your business investor-ready with professional valuation, financial projections, and a polished pitch deck that helps you make the right impression in front of investors.",
    features: ["Business Valuation", "Financial Projections", "Investor Pitch Deck", "Cap Table Preparation", "Term Sheet Guidance"],
    documentsRequired: ["Financial Statements", "Business Plan", "Cap Table (if existing)", "Incorporation Certificate", "Founder Profiles"]
  }
];

const BasicServices = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {basicServices.map((service, index) => (
        <BasicCard
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

export default BasicServices;