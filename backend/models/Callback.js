const mongoose = require("mongoose");

const callbackSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    default: "" 
  },
  planType: { 
    type: String, 
    enum: ["basic", "premium"], 
    required: true 
  },
  serviceName: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["Pending", "Contacted", "Resolved"],
    default: "Pending" // Useful for your admin dashboard tracking
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model("Callback", callbackSchema);