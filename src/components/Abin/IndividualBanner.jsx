import React from 'react';
import { Trash2, Save } from 'lucide-react';

const IndividualBanner = ({
  id,
  title,
  offerValue,
  description,
  imageUrl,
  validUntil,
  isActive,
  onFieldChange,
  onSave,
  onDelete
}) => {
  return (
    <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm relative">
      
      {/* Unique ID Display */}
      <div className="mb-4 flex justify-between items-center">
        <div>
          <span className="block text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-1">
            Unique Database Key ID
          </span>
          <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            {id}
          </span>
        </div>
      </div>

      {/* Title + Offer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">Banner Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => onFieldChange(id, 'title', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm text-slate-700 font-medium"
            placeholder="e.g., New Year Special"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">Offer Value</label>
          <input
            type="text"
            value={offerValue}
            onChange={(e) => onFieldChange(id, 'offerValue', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm text-slate-700 font-medium"
            placeholder="e.g., 20% OFF"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-500 mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => onFieldChange(id, 'description', e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm text-slate-700"
          placeholder="Offer description"
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-500 mb-1">Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => onFieldChange(id, 'imageUrl', e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm font-mono bg-slate-50 text-slate-600"
        />
      </div>

      {/* Image Preview Window */}
      {imageUrl && (
        <div className="mb-6 rounded-lg overflow-hidden border max-h-56 bg-slate-100 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title || "Banner"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x200?text=Invalid+Image+URL';
            }}
          />
        </div>
      )}

      {/* Footer Controls Container */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-slate-100">
        <div className="w-full sm:w-1/2">
          <label className="block text-xs font-bold text-slate-500 mb-1">Valid Until</label>
          <input
            type="text"
            value={validUntil}
            onChange={(e) => onFieldChange(id, 'validUntil', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm text-slate-700"
            placeholder="DD-MM-YYYY"
          />
        </div>

        <div className="flex items-center justify-end gap-6 pt-4 sm:pt-0">
          {/* Active Checkbox */}
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => onFieldChange(id, 'isActive', e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
            />
            Active
          </label>

          {/* Core Action Sync Utility Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onSave}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 px-3 rounded-md shadow-sm flex items-center gap-1.5 transition-colors"
              title="Save Changes to Database"
            >
              <Save size={14} />
              Save Changes
            </button>

            <button
              onClick={() => onDelete(id)}
              className="text-slate-400 hover:text-red-600 p-2 rounded hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200"
              title="Delete Banner Permanently"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndividualBanner;