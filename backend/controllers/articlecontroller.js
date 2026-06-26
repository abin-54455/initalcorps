const Article = require("../models/Article");

// Create Article
const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 }); // Newest articles first
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Article
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedArticle = await Article.findByIdAndUpdate(id, req.body, {
      new: true, // Return modified document instead of original
      runValidators: true,
    });

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Article
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArticle = await Article.findByIdAndDelete(id);

    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ message: "Article permanently deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createArticle,
  getArticles,
  updateArticle,
  deleteArticle,
};