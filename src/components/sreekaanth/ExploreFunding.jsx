import { DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Component 63 — key takeaway + explore funding CTA banner
export default function ExploreFunding() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/basic/investment-and-funding");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mi-banner">
      <p className="mi-banner-text">
        <span className="mi-banner-bold">Key Takeaway: </span>
        The Indian startup ecosystem is maturing with emphasis on sustainable growth, strong unit
        economics, and regulatory compliance. Early-stage legal and financial structuring is{" "}
        <span className="mi-banner-accent">no longer optional</span> — it's a competitive
        advantage.
      </p>
      <button className="mi-btn" onClick={handleExplore}>
        <DollarSign size={15} strokeWidth={2.5} />
        Explore Investment &amp; Funding
      </button>
    </div>
  );
}