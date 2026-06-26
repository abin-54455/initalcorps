import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const EditService = ({ service, onSave, onCancel }) => {
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

  useEffect(() => {
    if (service) {
      setFormData({
        title: service.title || '',
        category: service.category ? (service.category.charAt(0).toUpperCase() + service.category.slice(1)) : 'Incorporation',
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/services/${service._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          category: formData.category.toLowerCase()
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to update service");
      }

      alert("Service updated successfully!");
      if (onSave) onSave(data);
    } catch (error) {
      console.error("Update Error:", error);
      alert(error.message || "Failed to update service");
    }
  };

  return (
    <div className="w-full max-w-none mx-auto mt-4 bg-white border border-slate-200 rounded-lg p-5 shadow-sm">
      <h3 className="text-base font-bold text-[#0f172a] mb-5">Edit Service</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Service Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Company Incorporation"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Category</label>
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

        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            placeholder="Private Limited, LLP, OPC, Partnership"
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">Long Description</label>
          <textarea
            name="longDescription"
            value={formData.longDescription}
            onChange={handleChange}
            placeholder="Detailed description of the service..."
            rows={3}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 resize-none font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Basic Price</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
              <input
                type="number"
                name="basicPrice"
                value={formData.basicPrice}
                onChange={handleChange}
                placeholder="6999"
                className="w-full text-sm pl-7 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Premium Price</label>
            <div className="relative">
              <span className="absolute left-3 top-2 text-sm text-slate-400">₹</span>
              <input
                type="number"
                name="premiumPrice"
                value={formData.premiumPrice}
                onChange={handleChange}
                placeholder="12999"
                className="w-full text-sm pl-7 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Basic Timeline</label>
            <input
              type="text"
              name="basicTimeline"
              value={formData.basicTimeline}
              onChange={handleChange}
              placeholder="7-14 days"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">Premium Timeline</label>
            <input
              type="text"
              name="premiumTimeline"
              value={formData.premiumTimeline}
              onChange={handleChange}
              placeholder="3-7 days"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
              required
            />
          </div>
        </div>

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