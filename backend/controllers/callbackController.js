const Callback = require("../models/Callback");

// @desc    Submit a new callback request
// @route   POST /api/callbacks
const createCallbackRequest = async (req, res) => {
  try {
    const { name, email, phone, message, planType, serviceName } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !planType || !serviceName) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    // Create and save the new request
    const newCallback = new Callback({
      name,
      email,
      phone,
      message,
      planType,
      serviceName
    });

    await newCallback.save();

    res.status(201).json({ 
      success: true,
      message: "Callback request submitted successfully", 
      data: newCallback 
    });
  } catch (error) {
    console.error("Error creating callback request:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};

// @desc    Get all callback requests (For your Admin Module)
// @route   GET /api/callbacks
const getAllCallbacks = async (req, res) => {
  try {
    // Sorting by newest first
    const callbacks = await Callback.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: callbacks.length, data: callbacks });
  } catch (error) {
    console.error("Error fetching callbacks:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { 
  createCallbackRequest,
  getAllCallbacks
};