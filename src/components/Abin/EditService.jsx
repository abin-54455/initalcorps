import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const EditService = ({ service, onSave, onCancel }) => {
  // Initialize state with values passed via props or fallback to defaults
  const [formData, setFormData] = useState({
    title: '',
    category: 'Incorporation',
    shortDescription: '',
    longDescription: '',
    basicPrice: '',
    premiumPrice: '',
    basicTimeline: '',
    premiumTimeline: ''
  });

  // Keep state synchronized if a different service prop is passed
  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title || '',
        category: service.category || 'Incorporation',
        shortDescription: service.shortDescription || '',
        longDescription: service.longDescription || '',
        basicPrice: service.basicPrice || '',
        premiumPrice: service.premiumPrice || '',
        basicTimeline: service.basicTimeline || '',
        premiumTimeline: service.premiumTimeline || ''
      });
    }
  }, [service]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) {
      onSave({ ...service, ...formData });
    }
  };

  return (
   <div className="w-full max-w-none mx-auto mt-4 bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
   <h3 className="text-base font-bold text-[#0f172a] mb-5">Edit Service</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Row 1: Service Title & Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Service Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Company Incorporation"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
            >
              <option value="Incorporation">Incorporation</option>
              <option value="Taxation">Taxation</option>
              <option value="Compliance">Compliance</option>
              <option value="IPR">Intellectual Property</option>
            </select>
          </div>
        </div>

        {/* Row 2: Short Description */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">
            Short Description
          </label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Private Limited, LLP, OPC, Partnership"
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
            required
          />
        </div>

        {/* Row 3: Long Description */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">
            Long Description
          </label>
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            placeholder="Detailed description of the service..."
            rows={3}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 resize-none font-medium"
          />
        </div>

        {/* Row 4: Basic Price & Premium Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Basic Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
              <input
                type="text"
                name="basicPrice"
                value={formData.basicPrice}
                onChange={handleChange}
                placeholder="6,999"
                className="w-full text-sm pl-7 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Premium Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
              <input
                type="text"
                name="premiumPrice"
                value={formData.premiumPrice}
                onChange={handleChange}
                placeholder="12,999"
                className="w-full text-sm pl-7 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
                required
              />
            </div>
          </div>
        </div>

        {/* Row 5: Basic Timeline & Premium Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Basic Timeline
            </label>
            <input
              type="text"
              name="basicTimeline"
              value={formData.basicTimeline}
              onChange={handleChange}
              placeholder="7-14 days"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Premium Timeline
            </label>
            <input
              type="text"
              name="premiumTimeline"
              value={formData.premiumTimeline}
              onChange={handleChange}
              placeholder="3-7 days"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 placeholder-slate-300 text-slate-700 font-medium"
              required
            />
          </div>
        </div>

        {/* Row 6: Action Buttons Container */}
        <div className="flex items-center gap-2 pt-3">
          <button
            type="submit"
            className="bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold py-2 px-4 rounded-md shadow flex items-center gap-1.5 transition-colors"
          >
            <Save size={16} />
            Save Service
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="bg-white hover:bg-slate-50 text-slate-500 border border-slate-200 text-sm font-semibold py-2 px-5 rounded-md shadow-sm transition-colors"
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
};

export default EditService;