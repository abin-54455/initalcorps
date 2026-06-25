import React from 'react';
import { Trash2 } from 'lucide-react';
const IndividualBanner = ({
  id,
  title,
  offerValue,
  description,
  imageUrl,
  validUntil,
  isActive,
  onFieldChange,
  onDelete
}) => {
  return (
  <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm relative">


      {/* Unique ID */}
      <div className="mb-4">
        <span className="block text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-1">
          Unique ID
        </span>
        <span className="text-sm font-bold text-slate-700">
          {id}
        </span>
      </div>

      {/* Title + Offer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Banner Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => onFieldChange(id, 'title', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="e.g., New Year Special"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Offer Value
          </label>
          <input
            type="text"
            value={offerValue}
            onChange={(e) => onFieldChange(id, 'offerValue', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="e.g., 20% OFF"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-500 mb-1">
          Description
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => onFieldChange(id, 'description', e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm"
          placeholder="Offer description"
        />
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="block text-xs font-bold text-slate-500 mb-1">
          Image URL
        </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => onFieldChange(id, 'imageUrl', e.target.value)}
          className="w-full px-3 py-2 border rounded-md text-sm font-mono bg-slate-50"
        />
      </div>

      {/* Image Preview */}
      {imageUrl && (
        <div className="mb-6 rounded-lg overflow-hidden border max-h-56 bg-slate-100 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title || "Banner"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://placehold.co/600x200?text=Invalid+Image';
            }}
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div className="w-full sm:w-2/3">
          <label className="block text-xs font-bold text-slate-500 mb-1">
            Valid Until
          </label>
          <input
            type="text"
            value={validUntil}
            onChange={(e) => onFieldChange(id, 'validUntil', e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="DD-MM-YYYY"
          />
        </div>

        <div className="flex items-center gap-4">

          {/* Active */}
          <label className="flex items-center gap-2 text-sm font-semibold">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) =>
                onFieldChange(id, 'isActive', e.target.checked)
              }
              className="w-4 h-4"
            />
            Active
          </label>

          {/* Delete */}
          <button
            onClick={() => onDelete(id)}
            className="text-red-500 hover:text-red-700"
            title="Delete Banner"
          >
            <Trash2 />
          </button>

        </div>
      </div>

    </div>
  );
};

export default IndividualBanner;