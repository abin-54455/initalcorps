const Banner = require("../models/Banner");

// Get all banners
const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.json(banners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create an empty placeholder banner document (matches your UI workflow)
const createBanner = async (req, res) => {
  try {
    const newBanner = await Banner.create(req.body);
    res.status(201).json(newBanner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update operational banners
const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await Banner.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Banner not found" });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete banner
const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Banner.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Banner not found" });
    res.json({ message: "Banner deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getBanners, createBanner, updateBanner, deleteBanner };