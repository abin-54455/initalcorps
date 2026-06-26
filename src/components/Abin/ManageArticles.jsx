import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import IndividualArticleCard from './IndividualArticles';
import AddArticles from './AddArticles';
import EditArticle from './EditArticels';

const ManageArticles = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);

  // Fetch all articles from backend on lifecycle mount
  const fetchArticles = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/articles");
      if (!response.ok) throw new Error("Failed to fetch articles");
      const data = await response.json();
      setArticlesData(data);
    } catch (error) {
      console.error("Error loading articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleAddArticleClick = () => {
    setIsAdding(true);
    setEditingArticle(null); 
  };

  const handleEditArticleClick = (articleObj) => {
    setEditingArticle(articleObj);
    setIsAdding(false);
  };

  // Connected Database Delete Pipeline Trigger
  const handleDeleteArticleClick = async (id) => {
    const confirmation = window.confirm("Are you sure you want to permanently delete this article?");
    if (!confirmation) return;

    try {
      const response = await fetch(`http://localhost:5000/api/articles/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to eliminate server document");

      // Reactively wipe element out of operational view using Mongoose _id
      setArticlesData((prevArticles) => prevArticles.filter(item => item._id !== id));
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete article");
    }
  };

  // State sync pipeline executed after successful validation inside AddArticles component
  const handleSaveNewArticle = (newArticleObj) => {
    setArticlesData((prevArticles) => [newArticleObj, ...prevArticles]);
    setIsAdding(false); 
  };

  // State sync pipeline executed after successful modification inside EditArticle component
  const handleUpdateExistingArticle = (updatedFields) => {
    setArticlesData((prevArticles) =>
      prevArticles.map((item) => item._id === updatedFields._id ? updatedFields : item)
    );
    setEditingArticle(null); 
  };

  return (
    <div className="w-full rounded-xl bg-slate-50/50 p-4">
      
      {/* Top Controller Header Banner Panel */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#0f172a]">Manage Articles</h2>
        
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

      {/* Dynamic Swapping Matrix Views */}
      {isAdding && (
        <AddArticles 
          onSuccess={handleSaveNewArticle} 
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
          {loading ? (
            <p className="text-slate-400 font-medium text-center text-sm py-4">Loading articles dashboard...</p>
          ) : articlesData.length === 0 ? (
            <p className="text-slate-400 font-medium text-center text-sm py-4">No documents discovered. Click 'Add Article' to publish a new text item.</p>
          ) : (
            articlesData.map((article) => (
              <IndividualArticleCard 
                key={article._id} 
                article={article} 
                onEdit={() => handleEditArticleClick(article)} 
                onDelete={() => handleDeleteArticleClick(article._id)}
              />
            ))
          )}
        </div>
      )}
      
    </div>
  );
};

export default ManageArticles;