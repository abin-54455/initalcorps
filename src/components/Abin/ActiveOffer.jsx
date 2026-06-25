import React from "react";

const ActiveOffers = ({
  title = "Active Offers",
  offerName = "New Year Special",
  discountText = "20% OFF",
}) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] w-full">
      {/* Component Title */}
      <h3 className="text-slate-800 font-bold text-lg mb-5">
        {title}
      </h3>

      {/* Offer Row */}
      <div className="flex items-center gap-4">
        {/* Gift Icon Box */}
        <div className="w-12 h-12 rounded-full bg-[#c2935c] flex items-center justify-center text-white shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </div>

        {/* Offer Details */}
        <div className="flex flex-col">
          <span className="text-[#1e3a8a] font-bold text-base leading-tight">
            {offerName}
          </span>
          <span className="text-slate-400 text-sm font-medium mt-0.5">
            {discountText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveOffers;