import React, { useState } from 'react';
import IndividualBanner from './IndividualBanner';

const OfferBanners = () => {
  const [banners, setBanners] = useState([
    {
      id: 'OFFER-2026-001',
      title: 'New Year Special',
      offerValue: '20% OFF',
      description: 'Flat 20% off on all incorporation services',
      imageUrl: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800',
      validUntil: '31-12-2026',
      isActive: true
    },
    {
      id: 'OFFER-2026-002',
      title: 'Summer Sale',
      offerValue: '30% OFF',
      description: 'Big discount on all services',
      imageUrl: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800',
      validUntil: '31-12-2026',
      isActive: true
    }
  ]);

  const handleAddBanner = () => {
    const nextIndex = banners.length + 1;
    const paddedIndex = String(nextIndex).padStart(3, '0');
    const currentYear = new Date().getFullYear();

    const newBanner = {
      id: `OFFER-${currentYear}-${paddedIndex}`,
      title: '',
      offerValue: '',
      description: '',
      imageUrl: '',
      validUntil: `31-12-${currentYear}`,
      isActive: true
    };

    setBanners([...banners, newBanner]);
  };

  const handleFieldChange = (id, fieldName, value) => {
    setBanners((prev) =>
      prev.map((banner) =>
        banner.id === id ? { ...banner, [fieldName]: value } : banner
      )
    );
  };

  const handleDeleteBanner = (id) => {
    setBanners((prev) => prev.filter((banner) => banner.id !== id));
  };

  return (
    /* FIXED: Changed 'max-w-4xl' to 'w-full' and adjusted styling to match wide dashboard panels */
    <div className="w-full rounded-xl bg-slate-50/50 p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#0f172a]">
          Manage Offer Banners
        </h2>

        <button
          onClick={handleAddBanner}
          className="flex items-center space-x-1 bg-[#d99443] hover:bg-[#c28135] text-white text-xs font-bold px-4 py-2 rounded-md transition-colors"
        >
          <span>+</span>
          <span>Add Banner</span>
        </button>
      </div>

      {/* Banner List */}
      {banners.length > 0 ? (
        <div className="space-y-4">
          {banners.map((banner) => (
            <IndividualBanner
              key={banner.id}
              id={banner.id}
              title={banner.title}
              offerValue={banner.offerValue}
              description={banner.description}
              imageUrl={banner.imageUrl}
              validUntil={banner.validUntil}
              isActive={banner.isActive}
              onFieldChange={handleFieldChange}
              onDelete={handleDeleteBanner}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-lg bg-white">
          <p className="text-sm text-slate-400">
            No offer banners created yet.
          </p>

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