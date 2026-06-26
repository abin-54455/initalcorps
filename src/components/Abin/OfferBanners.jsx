import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IndividualBanner from './IndividualBanner';

const OfferBanners = () => {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Banners from API
  const fetchBanners = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/banners");
      setBanners(response.data);
    } catch (error) {
      console.error("Error loading banners:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // Post a fallback structural item upstream to capture an operational DB tracking identifier (_id)
  const handleAddBanner = async () => {
    const currentYear = new Date().getFullYear();
    const defaultPayload = {
      title: '',
      offerValue: '',
      description: '',
      imageUrl: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800',
      validUntil: `31-12-${currentYear}`,
      isActive: true
    };

    try {
      const response = await axios.post("http://localhost:5000/api/banners", defaultPayload);
      setBanners((prev) => [response.data, ...prev]);
    } catch (error) {
      console.error("Failed to append empty entry container:", error);
      alert("Failed to initialize new banner item");
    }
  };

  const handleFieldChange = (id, fieldName, value) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner._id === id ? { ...banner, [fieldName]: value } : banner
      )
    );
  };

  // Dispatch persistent updates down to DB
  const handleSaveBannerChanges = async (id, completeBannerObj) => {
    try {
      await axios.put(`http://localhost:5000/api/banners/${id}`, completeBannerObj);
      alert("Banner adjustments saved persistently!");
    } catch (error) {
      console.error("Persistent sync error:", error);
      alert("Failed to update banner data row");
    }
  };

  const handleDeleteBanner = async (id) => {
    if (!window.confirm("Are you sure you want to delete this offer banner?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/banners/${id}`);
      setBanners((prev) => prev.filter((banner) => banner._id !== id));
    } catch (error) {
      console.error("Delete structural row error:", error);
      alert("Failed to safely remove target item from database");
    }
  };

  return (
    <div className="w-full rounded-xl bg-slate-50/50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#0f172a]">Manage Offer Banners</h2>
        <button
          onClick={handleAddBanner}
          className="flex items-center space-x-1 bg-[#d99443] hover:bg-[#c28135] text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
        >
          <span>+</span>
          <span>Add Banner</span>
        </button>
      </div>

      {/* Banner Rendering Pipeline Container */}
      {loading ? (
        <p className="text-slate-400 text-center font-medium text-sm py-6">Loading banners layout matrix...</p>
      ) : banners.length > 0 ? (
        <div className="space-y-4">
          {banners.map((banner) => (
            <IndividualBanner
              key={banner._id}
              id={banner._id}
              title={banner.title}
              offerValue={banner.offerValue}
              description={banner.description}
              imageUrl={banner.imageUrl}
              validUntil={banner.validUntil}
              isActive={banner.isActive}
              onFieldChange={handleFieldChange}
              onSave={() => handleSaveBannerChanges(banner._id, banner)}
              onDelete={handleDeleteBanner}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-lg bg-white">
          <p className="text-sm text-slate-400">No offer banners created yet.</p>
          <button
            onClick={handleAddBanner}
            className="mt-2 text-xs font-bold text-amber-600 hover:underline"
          >
            Create your first banner
          </button>
        </div>
      )}
    </div>
  );
};

export default OfferBanners;