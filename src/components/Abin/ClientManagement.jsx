import React, { useState } from 'react';
import IndividualManagementCard from './IndividualManagement';

const ClientManagement = () => {
  const [clientsData, setClientsData] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'TechVista Solutions Pvt Ltd',
      email: 'rajesh@techvista.ai',
      phone: '+91 98765 43210',
      joinedDate: '2026-01-15',
      services: ['Company Incorporation', 'GST Registration', 'Trademark Registration'],
      totalSpent: 32497,
      status: 'Active',
      address: 'Plot No. 42, Hitech City, Hyderabad, Telangana',
      panNumber: 'ABCDE1234F',
      gstin: '36ABCDE1234F1Z5'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      company: 'GreenEarth Organics',
      email: 'priya@greenearth.in',
      phone: '+91 98123 45678',
      joinedDate: '2026-02-20',
      services: ['ISO Certification', 'Annual Compliance'],
      totalSpent: 28998,
      status: 'Active',
      address: 'Metro Station Road, Indiranagar, Bengaluru, Karnataka',
      panNumber: 'WXYZG9876H',
      gstin: '29WXYZG9876H1Z2'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      company: 'StyleHub Fashion',
      email: 'arjun@stylehub.com',
      phone: '+91 97754 22123',
      joinedDate: '2026-03-12',
      services: ['IPR Filing'],
      totalSpent: 12500,
      status: 'Inactive',
      address: 'Linking Road, Bandra West, Mumbai, Maharashtra',
      panNumber: 'JKLMOP5432Q',
      gstin: '27JKLMOP5432Q1ZA'
    }
  ]);

  const handleStatusChange = (id, newStatus) => {
    setClientsData((prev) =>
      prev.map((client) => (client.id === id ? { ...client, status: newStatus } : client))
    );
  };

  return (
    <div className="w-full rounded-xl bg-slate-50/50 p-4">
      
      {/* Top Header Component Context Row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#0f172a]">Client Management</h2>
        <div className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
          Total Clients: {clientsData.length}
        </div>
      </div>

      {/* Individual Management Stack Container */}
      <div className="space-y-4">
        {clientsData.map((client) => (
          <IndividualManagementCard 
            key={client.id} 
            client={client} 
            onStatusUpdate={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientManagement;