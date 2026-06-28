const express = require("express");
const router = express.Router();
const { createCallbackRequest, getAllCallbacks } = require("../controllers/callbackController");

// Route to submit a new callback (used by the React frontend)
router.post("/", createCallbackRequest);

// Route to fetch all callbacks (used by the Admin dashboard)
router.get("/", getAllCallbacks);

module.exports = router;