import { Link } from "react-router-dom";
import {
  Building2, PenLine, Award, Receipt, ClipboardCheck,
  ScrollText, FileText, Rocket, TrendingUp,
  CheckCircle2, Clock, Crown
} from "lucide-react";

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

export const toSlug = (title) =>
  title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const PremiumCard = ({ title, subtitle, price, duration, features, popular }) => {
  const Icon = ICONS[title] || FileText;
  const visibleFeatures = features.slice(0, 3);
  const remaining = features.length - visibleFeatures.length;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">

      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center">
          <Icon size={26} strokeWidth={1.75} className="text-amber-700" />
        </div>
        {popular && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
            Popular
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-1.5 mb-5">{subtitle}</p>

      <ul className="space-y-3 mb-2">
        {visibleFeatures.map((item, index) => (
          <li key={index} className="flex items-start gap-2.5">
            <CheckCircle2 size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-slate-700">{item}</span>
          </li>
        ))}
      </ul>

      {remaining > 0 && (
        <p className="text-xs text-slate-400 font-medium ml-[26px] mb-4">
          +{remaining} more features
        </p>
      )}

      <hr className="border-slate-200 my-5" />

      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-amber-600">{price}</h2>
          <p className="flex items-center gap-1 text-xs text-slate-400 mt-1.5">
            <Clock size={13} /> {duration}
          </p>
        </div>
        <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
          <Crown size={13} /> Premium
        </span>
      </div>

      <div className="flex gap-3 mt-6">
        <Link
          to={`/premium/${toSlug(title)}`}
          className="flex-1 border border-slate-200 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center"
        >
          View Details
        </Link>
        <button className="flex-1 bg-[#D09A4E] text-white rounded-xl py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PremiumCard;