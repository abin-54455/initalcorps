const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    longDescription: {
      type: String,
    },

    basicPrice: {
      type: String,
      required: true,
    },

    premiumPrice: {
      type: String,
      required: true,
    },

    basicTimeline: {
      type: String,
      required: true,
    },

    premiumTimeline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);