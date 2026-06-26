import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import IndividualServices from './IndividualServices';
import AddServiceForm from './AddService';
import EditService from './EditService';

const ManageServices = () => {
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingService, setEditingService] = useState(null);

  // Fetch all services from backend on mount
  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/services");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setServicesData(data);
    } catch (error) {
      console.error("Error loading services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAddService = () => {
    setIsAdding(true);
    setEditingService(null);
  };

  const handleEditClick = (service) => {
    setEditingService(service);
    setIsAdding(false);
  };

  // DELETE handler integration with API
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      const response = await fetch(`http://localhost:5000/api/services/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete service");

      setServicesData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete service");
    }
  };

  // Callback handler invoked after successful creation
  const handleSaveNewService = (newServiceObj) => {
    setServicesData((prev) => [...prev, newServiceObj]);
    setIsAdding(false);
  };

  // Callback handler invoked after successful alteration
  const handleUpdateService = (updatedService) => {
    setServicesData((prevList) =>
      prevList.map((item) => (item._id === updatedService._id ? updatedService : item))
    );
    setEditingService(null);
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
          onSuccess={handleSaveNewService}
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
          {loading ? (
            <p className="text-slate-400 font-medium text-center text-sm py-4">Loading services...</p>
          ) : servicesData.length === 0 ? (
            <p className="text-slate-400 font-medium text-center text-sm py-4">
              No services discovered. Click 'Add Service' to create one.
            </p>
          ) : (
            servicesData.map((service) => (
              <IndividualServices
                key={service._id}
                service={service}
                onEdit={() => handleEditClick(service)}
                onDelete={() => handleDelete(service._id)}
              />
            ))
          )}
        </div>
      )}
      
    </div>
  );
};

export default ManageServices;