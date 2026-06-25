import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import IndividualServices from './IndividualServices';
import AddServiceForm from './AddService';
import EditService from './EditService'; // Imported your new Edit Component

const ManageServices = () => {
  const [servicesData, setServicesData] = useState([
    {
      id: 1,
      title: 'Company Incorporation',
      description: 'Private Limited, LLP, OPC, Partnership',
      basicPrice: 6999,
      premiumPrice: 12999,
      timeline: '7-14 days',
      category: 'incorporation',
      // Fields mapped out for the form components fallback
      shortDescription: 'Private Limited, LLP, OPC, Partnership',
      longDescription: 'Detailed description of company incorporation...',
      basicTimeline: '7-14 days',
      premiumTimeline: '3-7 days'
    },
    {
      id: 2,
      title: 'GST Registration & Filing',
      description: 'New GST Registration, Monthly/Quarterly Return Filing',
      basicPrice: 1499,
      premiumPrice: 4999,
      timeline: '2-3 days',
      category: 'taxation',
      shortDescription: 'New GST Registration, Monthly/Quarterly Return Filing',
      longDescription: 'Detailed description of GST processing...',
      basicTimeline: '2-3 days',
      premiumTimeline: '1-2 days'
    },
    {
      id: 3,
      title: 'Trademark Registration',
      description: 'Brand Name and Logo Protection, Objection Replies',
      basicPrice: 4499,
      premiumPrice: 8999,
      timeline: '3-5 days',
      category: 'intellectual property',
      shortDescription: 'Brand Name and Logo Protection, Objection Replies',
      longDescription: 'Detailed description of Trademark filing...',
      basicTimeline: '3-5 days',
      premiumTimeline: '1-2 days'
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  // Holds the specific service object currently being modified
  const [editingService, setEditingService] = useState(null);

  const handleAddService = () => {
    setIsAdding(true);
    setEditingService(null); // Ensure edit mode is cleared
  };

  const handleEditClick = (service) => {
    setEditingService(service);
    setIsAdding(false); // Ensure add mode is cleared
  };

  const handleDelete = (id) => {
    setServicesData((prev) => prev.filter((item) => item.id !== id));
  };

  // Add form submission handler
  const handleSaveNewService = (newServiceForm) => {
    const newServiceObj = {
      id: Date.now(),
      title: newServiceForm.title,
      description: newServiceForm.shortDescription,
      basicPrice: Number(newServiceForm.basicPrice) || 0,
      premiumPrice: Number(newServiceForm.premiumPrice) || 0,
      timeline: newServiceForm.basicTimeline,
      category: newServiceForm.category.toLowerCase(),
      ...newServiceForm // retaining full form keys for edits later
    };
    setServicesData((prev) => [...prev, newServiceObj]);
    setIsAdding(false);
  };

  // Edit form submission handler 
  const handleUpdateService = (updatedService) => {
    setServicesData((prevList) =>
      prevList.map((item) =>
        item.id === updatedService.id
          ? { 
              ...updatedService, 
              description: updatedService.shortDescription, // Synchronize presentation display fields
              timeline: updatedService.basicTimeline 
            }
          : item
      )
    );
    setEditingService(null); // Return to display dashboard
  };

  return (
    <div className="w-full rounded-xl bg-slate-50/50 p-4">
      
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#0f172a]">Manage Services</h2>
        
        {!isAdding && !editingService && (
          <button 
            onClick={handleAddService}
            className="bg-[#c2410c] hover:bg-[#b43e0c] text-white text-sm font-semibold py-2 px-4 rounded-lg shadow flex items-center gap-1.5 transition-colors"
          >
            <Plus size={16} strokeWidth={2.5} />
            Add Service
          </button>
        )}
      </div>

      {/* Dynamic View Swapping */}
      {isAdding && (
        <AddServiceForm 
          onSubmit={handleSaveNewService} 
          onCancel={() => setIsAdding(false)} 
        />
      )}

      {editingService && (
        <EditService 
          service={editingService}
          onSave={handleUpdateService}
          onCancel={() => setEditingService(null)}
        />
      )}

      {!isAdding && !editingService && (
        <div className="space-y-4">
          {servicesData.map((service) => (
            <IndividualServices
              key={service.id} 
              service={service} 
              onEdit={() => handleEditClick(service)} // Passes the entire item scope context upstream
              onDelete={() => handleDelete(service.id)}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ManageServices;