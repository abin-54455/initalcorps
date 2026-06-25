import React, { useState, useEffect } from 'react';
import IndividualFund from './IndividualFund';

const Funding = () => {
  const [applications, setApplications] = useState([
    {
      id: 'APP-001',
      companyName: 'TechVista AI Solutions',
      tagline: 'AI-Powered Customer Service Platform for Indian SMEs',
      description: 'Building an affordable AI chatbot platform specifically designed for Indian small and medium businesses.',
      fundingAmount: '₹2 Crores',
      status: 'Pending',
      founder: 'Rajesh Kumar',
      email: 'rajesh@techvista.ai',
      phone: '+91 98765 43210',
      submittedDate: '2026-06-05',
      businessModel: 'SaaS subscription model with tiered pricing',
      marketSize: 'TAM: 63 million SMEs in India',
      currentRevenue: '₹45 lakhs ARR, growing at 25% MoM',
      attachments: [
        { name: 'Pitch_Deck.pdf', size: '2.4 MB' },
        { name: 'Financial_Projections.xlsx', size: '856 KB' }
      ]
    }
  ]);

  // Save applications to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(
      'fundingApplications',
      JSON.stringify(applications)
    );
  }, [applications]);

  const handleStatusChange = (id, newStatus) => {
    setApplications(prev =>
      prev.map(app =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  const handleDelete = (id) => {
    setApplications(prev =>
      prev.filter(app => app.id !== id)
    );
  };

  return (
    <div className="w-full max-w-none mx-auto p-0 bg-transparent">

      <div className="border-b border-slate-200 pb-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">
          Funding Applications
        </h2>
      </div>

      {applications.length > 0 ? (
        <div className="space-y-4">
          {applications.map((app) => (
            <IndividualFund
              key={app.id}
              application={app}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-lg bg-white">
          <p className="text-sm text-slate-400 font-medium">
            No funding applications found.
          </p>
        </div>
      )}

    </div>
  );
};

export default Funding;