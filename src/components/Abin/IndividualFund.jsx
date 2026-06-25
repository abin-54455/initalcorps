import React from 'react';

const IndividualFund = ({ application, onStatusChange, onDelete }) => {
  if (!application) return null;

  const {
    id,
    companyName,
    tagline,
    description,
    fundingAmount,
    status,
    founder,
    email,
    phone,
    submittedDate,
    businessModel,
    marketSize,
    currentRevenue,
    attachments = []
  } = application;

  const getStatusStyles = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'approved':
        return { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', text: 'text-emerald-600' };
      case 'reviewing':
        return { badge: 'bg-blue-50 text-blue-700 border-blue-200', text: 'text-blue-600' };
      case 'rejected':
        return { badge: 'bg-rose-50 text-rose-700 border-rose-200', text: 'text-rose-600' };
      case 'pending':
      default:
        return { badge: 'bg-amber-50 text-amber-700 border-amber-200', text: 'text-[#d99443]' };
    }
  };

  const styles = getStatusStyles(status);

  return (
    /* FIXED: Removed mb-6 to accommodate structural list spacing seamlessly */
    <div className="border border-slate-200 rounded-lg p-5 md:p-6 bg-white shadow-sm relative">
      
      {/* Top Header Grid: Company Info, Funding Amount & Action Dropdowns */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        <div>
          <div className="flex items-center space-x-3 flex-wrap gap-y-2">
            <h3 className="text-xl font-bold text-slate-800">{companyName}</h3>
            <span className={`px-2.5 py-0.5 rounded text-xs font-semibold border ${styles.badge} capitalize`}>
              {status}
            </span>
          </div>
          <h4 className="text-sm font-semibold text-[#d99443] mt-1">
            {tagline}
          </h4>
        </div>

        {/* Amount & Status Panel Controls */}
        <div className="flex flex-col items-end gap-2 w-full md:w-auto self-stretch md:self-auto">
          <span className="text-xl font-bold text-[#d99443]">
            {fundingAmount}
          </span>
          
          <div className="flex flex-row md:flex-col gap-2 w-full md:w-32 justify-end">
            <select
              value={status}
              onChange={(e) => onStatusChange(id, e.target.value)}
              className="w-full text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded px-2 py-1.5 focus:outline-none focus:border-slate-400"
            >
              <option value="Pending">Pending</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>

            <button
              onClick={() => onDelete(id)}
              className="w-full text-xs font-semibold text-rose-500 bg-white border border-rose-200 hover:bg-rose-50 rounded py-1.5 transition-colors text-center"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Paragraph Pitch Description */}
      <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6 max-w-3xl">
        {description}
      </p>

      {/* Meta Field Rows Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-6 text-sm">
        <div className="flex"><span className="font-bold text-slate-500 w-24 shrink-0">Founder:</span> <span className="text-slate-700 font-medium">{founder}</span></div>
        <div className="flex"><span className="font-bold text-slate-500 w-24 shrink-0">Email:</span> <span className="text-slate-500 font-mono break-all">{email}</span></div>
        <div className="flex"><span className="font-bold text-slate-500 w-24 shrink-0">Phone:</span> <span className="text-slate-700 font-medium">{phone}</span></div>
        <div className="flex"><span className="font-bold text-slate-500 w-24 shrink-0">Submitted:</span> <span className="text-slate-500 font-mono">{submittedDate}</span></div>
      </div>

      {/* Deep-dive Detailed Text Areas */}
      <div className="space-y-4 mb-6">
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Business Model</span>
          <p className="text-sm font-semibold text-slate-700">{businessModel}</p>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Market Size</span>
          <p className="text-sm font-semibold text-slate-700">{marketSize}</p>
        </div>
        <div>
          <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Current Revenue</span>
          <p className="text-sm font-semibold text-slate-700">{currentRevenue}</p>
        </div>
      </div>

      {/* Document Attachments Panel Footer */}
      <div>
        <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Attachments</span>
        <div className="flex flex-wrap gap-3">
          {attachments.map((file, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center space-x-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded text-xs text-slate-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="font-semibold text-slate-700 truncate max-w-[150px] sm:max-w-none">{file.name}</span>
              <span className="text-slate-400">({file.size})</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-400 hover:text-slate-600 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default IndividualFund;