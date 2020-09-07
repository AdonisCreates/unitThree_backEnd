const express = require("express");
const router = express.Router();
const Spotify = require("../models/track.js");

// Index Route

router.get("/", (req, res) => {});

// New
router.get("/new", (req, res) => {
  res.send("New");
});

// Delete/DESTROY

// Update

// Create

// Edit

// Show

module.exports = router;
