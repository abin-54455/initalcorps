import React from "react";

const RecentClientCard = ({
  title = "Recent Clients",
  clientName = "Rajesh Kumar",
  companyName = "TechVista Solutions Pvt Ltd",
}) => {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] w-full">
      {/* Component Title */}
      <h3 className="text-slate-800 font-bold text-lg mb-5">
        {title}
      </h3>

      {/* Client Row */}
      <div className="flex items-center gap-4">
        {/* Avatar Circle */}
        <div className="w-12 h-12 rounded-full bg-[#1e293b] flex items-center justify-center text-white shrink-0">
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
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.656-5.64 9.093 9.093 0 0 0-4.143 0 3 3 0 0 0-4.656 5.64 9.093 9.093 0 0 0 3.741.479V21a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
            />
          </svg>
        </div>

        {/* Client Details */}
        <div className="flex flex-col">
          <span className="text-slate-900 font-bold text-base leading-tight">
            {clientName}
          </span>
          <span className="text-slate-400 text-sm mt-0.5">
            {companyName}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentClientCard;