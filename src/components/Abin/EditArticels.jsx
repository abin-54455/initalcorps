import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';

const EditArticle = ({ article, onSave, onCancel }) => {
  // Initialize internal form state
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    readTime: '',
    excerpt: '',
    contentHtml: ''
  });

  // Sync incoming article data into local form state
  useEffect(() => {
    if (article) {
      setFormData({
        title: article.title || '',
        category: article.category || '',
        readTime: article.readTime || '',
        excerpt: article.excerpt || '',
        contentHtml: article.contentHtml || ''
      });
    }
  }, [article]);

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
      onSave({ ...article, ...formData });
    }
  };

  return (
   <div className="w-full max-w-none mx-auto mt-4 bg-white border border-slate-200 rounded-xl p-4 md:p-6 shadow-sm">
    <h3 className="text-base font-bold text-[#0f172a] mb-5">Edit Article</h3>
    
    <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Row 1: Article Title */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">
            Article Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Complete Guide to Company Incorporation"
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
            required
          />
        </div>

        {/* Row 2: Category & Read Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Category
            </label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Incorporation"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-slate-700 tracking-wide">
              Read Time
            </label>
            <input
              type="text"
              name="readTime"
              value={formData.readTime}
              onChange={handleChange}
              placeholder="5 min read"
              className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium"
              required
            />
          </div>
        </div>

        {/* Row 3: Excerpt */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Brief summary of the article..."
            rows={3}
            className="w-full text-sm px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-medium leading-relaxed resize-none"
            required
          />
        </div>

        {/* Row 4: Content (HTML) */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-slate-700 tracking-wide">
            Content (HTML)
          </label>
  <textarea
  name="contentHtml"
  value={formData.contentHtml}
  onChange={handleChange}
  placeholder="<h2>Article content...</h2>"
  rows={8}
  className="w-full h-64 overflow-y-scroll text-sm px-3 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-700 font-mono text-xs leading-relaxed resize-none"
  style={{ maxHeight: '260px' }}
  required
/>
        </div>

        {/* Row 5: Actions Controls Footer */}
        <div className="flex items-center gap-2 pt-3">
          <button
            type="submit"
            className="bg-[#059669] hover:bg-[#047857] text-white text-sm font-semibold py-2 px-4 rounded-md shadow flex items-center gap-1.5 transition-colors"
          >
            <Save size={16} />
            Save Article
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

export default EditArticle;