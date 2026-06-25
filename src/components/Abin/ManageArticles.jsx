import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import IndividualArticleCard from './IndividualArticles';
import AddArticles from './AddArticles';
import EditArticle from './EditArticels';

const ManageArticles = () => {
  // 1. Reactive state array initializing default dashboard items
  const [articlesData, setArticlesData] = useState([
    {
      id: 1,
      title: 'Complete Guide to Company Incorporation in India',
      summary: 'Everything you need to know about registering a Private Limited Company, LLP, or OPC in India - from documentation to timelines.',
      category: 'incorporation',
      readTime: '5 min read',
      excerpt: 'Everything you need to know about registering a Private Limited Company, LLP, or OPC in India - from documentation to timelines.',
      contentHtml: '<h2>Complete Guide to Company Incorporation in India</h2><p>Overview content...</p>'
    },
    {
      id: 2,
      title: 'Why Your Startup Needs Trademark Protection',
      summary: 'Learn how trademark registration safeguards your brand identity and prevents infringement in the competitive Indian market.',
      category: 'licensing',
      readTime: '4 min read',
      excerpt: 'Learn how trademark registration safeguards your brand identity and prevents infringement in the competitive Indian market.',
      contentHtml: '<h2>Why Your Startup Needs Trademark Protection</h2><p>Overview content...</p>'
    },
    {
      id: 3,
      title: 'ISO Certification: Benefits for Indian Businesses',
      summary: 'Discover how ISO 9001, 14001, and 27001 certifications can boost credibility, improve operations, and open new market opportunities.',
      category: 'certification',
      readTime: '6 min read',
      excerpt: 'Discover how ISO 9001, 14001, and 27001 certifications can boost credibility, improve operations, and open new market opportunities.',
      contentHtml: '<h2>ISO Certification: Benefits for Indian Businesses</h2><p>Overview content...</p>'
    },
    {
      id: 4,
      title: 'GST Compliance Checklist for Small Businesses',
      summary: 'A comprehensive checklist to ensure your business stays GST-compliant and avoids penalties from tax authorities.',
      category: 'compliance',
      readTime: '8 min read',
      excerpt: 'A comprehensive checklist to ensure your business stays GST-compliant and avoids penalties from tax authorities.',
      contentHtml: '<h2>GST Compliance Checklist for Small Businesses</h2><p>Overview content...</p>'
    }
  ]);

  // 2. State view routing managers
  const [isAdding, setIsAdding] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  // Trigger add component form view
  const handleAddArticleClick = () => {
    setIsAdding(true);
    setEditingArticle(null); 
  };

  // Trigger editor form component view and populate context
  const handleEditArticleClick = (articleObj) => {
    setEditingArticle(articleObj);
    setIsAdding(false);
  };

  // Delete handler - updates state array reactively
  const handleDeleteArticleClick = (id) => {
    const confirmation = window.confirm("Are you sure you want to permanently delete this article?");
    if (confirmation) {
      setArticlesData((prevArticles) => prevArticles.filter(item => item.id !== id));
    }
  };

  // Save pipeline when creating new submissions from AddArticles.jsx
  const handleSaveNewArticle = (formFields) => {
    const newArticleObj = {
      id: Date.now(), // Generate numerical sequence timestamp fallback as temporary ID
      title: formFields.title,
      summary: formFields.excerpt, // Bind excerpt input parameter straight to listing summary presentation
      category: formFields.category,
      readTime: formFields.readTime,
      excerpt: formFields.excerpt,
      contentHtml: formFields.contentHtml
    };

    setArticlesData((prevArticles) => [newArticleObj, ...prevArticles]);
    setIsAdding(false); // Return dashboard back to general card lists overview
  };

  // Update pipeline when pushing changes from EditArticle.jsx
  const handleUpdateExistingArticle = (updatedFields) => {
    setArticlesData((prevArticles) =>
      prevArticles.map((item) =>
        item.id === updatedFields.id
          ? { ...updatedFields, summary: updatedFields.excerpt } // Ensure description fields match up seamlessly
          : item
      )
    );
    setEditingArticle(null); // Return dashboard back to general card lists overview
  };

  return (
    <div className="w-full rounded-xl bg-slate-50/50 p-4">
      
      {/* Top Controller Header Banner Panel */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#0f172a]">Manage Articles</h2>
        
        {/* Render "Add Article" button only if user is in lists overview workspace view */}
        {!isAdding && !editingArticle && (
          <button 
            onClick={handleAddArticleClick}
            className="bg-[#c2410c] hover:bg-[#b43e0c] text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
          >
            <Plus size={16} strokeWidth={2.5} />
            Add Article
          </button>
        )}
      </div>

      {/* Dynamic Conditional Rendering Switch Workspace Matrix Block */}
      {isAdding && (
        <AddArticles 
          onSubmit={handleSaveNewArticle} 
          onCancel={() => setIsAdding(false)} 
        />
      )}

      {editingArticle && (
        <EditArticle 
          article={editingArticle} 
          onSave={handleUpdateExistingArticle} 
          onCancel={() => setEditingArticle(null)} 
        />
      )}

      {!isAdding && !editingArticle && (
        <div className="space-y-4">
          {articlesData.map((article) => (
            <IndividualArticleCard 
              key={article.id} 
              article={article} 
              onEdit={() => handleEditArticleClick(article)} // Pass down full item object to store into editor state context
              onDelete={() => handleDeleteArticleClick(article.id)}
            />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default ManageArticles;