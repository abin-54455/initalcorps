import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  Building2, PenLine, Award, Receipt, ClipboardCheck,
  ScrollText, FileText, Rocket, TrendingUp,
  CheckCircle2, Clock, Sparkles, Phone, Mail, Send, MessageCircle
} from "lucide-react";
import { basicServices } from "./BasicServices";
import { premiumServices } from "./PremiumServices";

// ---- inlined from utils ----
const ICONS = {
  "Company Incorporation": Building2,
  "Trademark Registration": PenLine,
  "ISO Certification": Award,
  "GST Registration": Receipt,
  "Annual Compliance": ClipboardCheck,
  "Business Licenses": ScrollText,
  "Legal Documentation": FileText,
  "Startup India": Rocket,
  "Investment & Funding": TrendingUp
};

const toSlug = (title) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
// ---------------------------

const CATEGORIES = ["All", "Incorporation", "Compliance", "Licensing", "Certification"];
const CONTACT_PHONE = "+91 98765 43210";
const CONTACT_EMAIL = "info@initialcorps.in";
const WHATSAPP_NUMBER = "919876543210";

const ServiceDetail = ({ plan }) => {
  const { slug } = useParams();
  const [category, setCategory] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  
  // Added states for API handling
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const services = plan === "premium" ? premiumServices : basicServices;
  const service = services.find((s) => toSlug(s.title) === slug);

  if (!service) return <Navigate to={`/${plan}`} replace />;

  const isPremium = plan === "premium";
  const accent = isPremium
    ? { iconBg: "bg-amber-50", iconText: "text-amber-700", price: "text-amber-600", btn: "bg-[#D09A4E]", check: "text-amber-600" }
    : { iconBg: "bg-slate-100", iconText: "text-slate-700", price: "text-amber-500", btn: "bg-[#123B73]", check: "text-amber-500" };

  const filtered = category === "All" ? services : services.filter((s) => s.category === category);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  // Updated to interact with the backend callback API
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("http://localhost:5000/api/callbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          planType: plan,           // Passes 'basic' or 'premium'
          serviceName: service.title // Passes the active service name
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" }); // Clear form on success
      } else {
        const data = await response.json();
        setSubmitError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitError("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-6 items-start">

      {/* ---- Sidebar ---- */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden lg:sticky lg:top-6">
        <div className="bg-[#0F2A52] px-5 py-5">
          <p className="text-[11px] font-bold tracking-widest text-slate-300 mb-3">FILTER BY</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  category === cat ? "bg-amber-400 text-slate-900" : "bg-white/10 text-slate-200 hover:bg-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="max-h-[520px] overflow-y-auto">
          {filtered.map((s) => {
            const Icon = ICONS[s.title] || FileText;
            const isActive = toSlug(s.title) === slug;
            return (
              <Link
                key={s.title}
                to={`/${plan}/${toSlug(s.title)}`}
                className={`flex items-center gap-3 px-5 py-3.5 border-b border-slate-100 last:border-b-0 transition-colors ${
                  isActive ? "bg-[#0F2A52]" : "hover:bg-slate-50"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? "bg-white/10" : "bg-slate-100"}`}>
                  <Icon size={17} className={isActive ? "text-white" : "text-slate-600"} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className={`text-sm font-semibold truncate ${isActive ? "text-white" : "text-slate-800"}`}>{s.title}</p>
                  <p className={`text-xs ${isActive ? "text-slate-300" : "text-slate-500"}`}>{s.price}</p>
                </div>
                {s.popular && (
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${isActive ? "bg-amber-400 text-slate-900" : "bg-amber-100 text-amber-700"}`}>
                    Hot
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ---- Main panel ---- */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="flex items-start justify-between gap-4 bg-slate-50 border-b border-slate-200 px-6 py-5">
          <div className="flex items-start gap-4 min-w-0">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${accent.iconBg}`}>
              {(() => { const Icon = ICONS[service.title] || FileText; return <Icon size={22} className={accent.iconText} />; })()}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl font-bold text-slate-900">{service.title}</h1>
                {service.popular && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0F2A52] text-white text-[11px] font-semibold">
                    <Sparkles size={11} /> Popular
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-500 mt-1">{service.subtitle}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <p className={`text-2xl font-extrabold ${accent.price}`}>{service.price}</p>
            <p className="flex items-center justify-end gap-1 text-xs text-slate-400 mt-1">
              <Clock size={12} /> {service.duration}
            </p>
          </div>
        </div>

        <div className="px-6 py-6">
          <h2 className="text-base font-bold text-slate-900 mb-2">About This Service</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.description}</p>

          <h2 className="flex items-center gap-2 text-base font-bold text-slate-900 mb-3">
            <CheckCircle2 size={17} className="text-slate-700" /> What's Included
          </h2>
          <ul className="space-y-2.5 mb-6">
            {service.features.map((item, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className={accent.check} />
                <span className="text-sm text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-base font-bold text-slate-900 mb-3">Documents Required</h2>
          <ul className="space-y-2.5 mb-6">
            {service.documentsRequired.map((doc, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-slate-700">{doc}</span>
              </li>
            ))}
          </ul>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I need help with ${service.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 transition-colors text-white rounded-xl py-3.5 text-sm font-semibold"
          >
            <MessageCircle size={17} /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* ---- Callback form ---- */}
      <div className="space-y-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h2 className="text-base font-bold text-slate-900">Request a Callback</h2>
          <p className="text-xs text-slate-500 mt-1 mb-5">Our expert will contact you within 2 business hours</p>

          {submitted ? (
            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl p-4">
              Thanks — your request has been received. We'll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Full Name *", name: "name", type: "text", placeholder: "Rajesh Kumar" },
                { label: "Email Address *", name: "email", type: "email", placeholder: "rajesh@company.com" },
                { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" }
              ].map(({ label, name, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">{label}</label>
                  <input
                    type={type} name={name} required
                    value={form[name]} onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Message (Optional)</label>
                <textarea
                  name="message" rows={3}
                  value={form.message} onChange={handleChange}
                  placeholder={`I need help with ${service.title}...`}
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>

              {submitError && (
                <p className="text-xs text-red-600 bg-red-50 p-2 rounded-lg">{submitError}</p>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 text-white rounded-xl py-3 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 ${accent.btn}`}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={15} /> Submit Request
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center">
                By submitting, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>
              </p>
            </form>
          )}
        </div>

        <div className="flex gap-3">
          <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-full py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Phone size={13} /> {CONTACT_PHONE}
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 rounded-full py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors">
            <Mail size={13} /> {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;