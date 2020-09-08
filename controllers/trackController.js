const express = require("express");
const router = express.Router();
const Tracks = require("../models/track.js");

// Index Route

router.get("/", (req, res) => {
  Tracks.find({}, (error, allTracks) => {
    error ? res.status(404).json(error) : res.status(200).json(allTracks);
  });
});

// New
router.get("/new", (req, res) => {
  res.send("New Track Route. Can probably remove");
});

// Delete/DESTROY
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Tracks.findByIdAndRemove(req.params.id, (error, specificTrack) => {
    error ? res.status(404).json(error) : res.status(200).json(specificTrack);
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the dog document using our model
  Tracks.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedTrack) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedTrack);
    }
  );
});

// Create
router.post("/", (req, res) => {
  console.log(req.body);
  // Use Model to create Dog Document
  Tracks.create(req.body, (error, createdTrack) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdTrack);
  });
});

// Edit = may be unnecessary?

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  Tracks.findById(req.params.id, (error, foundTrack) => {
    // render the Show route and pass it the foundDog
    error ? res.status(404).json(error) : res.status(200).json(foundTrack);
  });
});

module.exports = router;
