import React from 'react';
import { SquarePen, Trash2 } from 'lucide-react';

const IndividualArticleCard = ({ article, onEdit, onDelete }) => {
  // Bind presentation display properties to fallback attributes dynamically
  const { title, excerpt, category, readTime } = article;

  return (
    <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm flex items-start justify-between gap-4 transition-all hover:shadow-md">
      
      {/* Left Text & Tags Area */}
      <div className="space-y-3 flex-1">
        <div>
          <h3 className="font-bold text-[#0f172a] text-base md:text-lg tracking-tight leading-snug">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1.5 font-normal leading-relaxed max-w-3xl">
            {excerpt}
          </p>
        </div>

        {/* Footer Meta Row */}
        <div className="flex items-center gap-3 text-xs md:text-sm">
          <span className="bg-[#e2e8f0] text-[#64748b] font-medium px-2.5 py-0.5 rounded-full capitalize">
            {category}
          </span>
          <span className="text-slate-400 font-normal">
            {readTime}
          </span>
        </div>
      </div>

      {/* Right Action Trigger Icons */}
      <div className="flex items-center gap-3 pt-0.5">
        <button 
          onClick={onEdit} 
          className="text-blue-500 hover:text-blue-700 p-1.5 rounded-md hover:bg-slate-50 transition-colors"
          title="Edit Article"
        >
          <SquarePen size={18} />
        </button>
        <button 
          onClick={onDelete} 
          className="text-red-400 hover:text-red-600 p-1.5 rounded-md hover:bg-slate-50 transition-colors"
          title="Delete Article"
        >
          <Trash2 size={18} />
        </button>
      </div>

    </div>
  );
};

export default IndividualArticleCard;