const express = require("express");
const router = express.Router();
const Playlist = require("../models/playlist.js");

// Index
router.get("/", (req, res) => {
  // Use Dog model to get all Dogs
  Playlist.find({}, (error, allPlaylist) => {
    error ? res.status(404).json(error) : res.status(200).json(allPlaylist);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Playlist.findByIdAndRemove(req.params.id, (err, playlist) => {
    error ? res.status(404).json(error) : res.status(200);
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the dog document using our model
  Playlist.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedPlaylist) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedPlaylist);
    }
  );
});

// Create
router.post("/", (req, res) => {
  console.log(req.body);
  // Use Model to create Dog Document
  Playlist.create(req.body, (error, createdPlaylist) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdPlaylist);
  });
});

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  Playlist.findById(req.params.id, (error, foundPlaylist) => {
    // render the Show route and pass it the foundDog
    error ? res.status(404).json(error) : res.status(200).json(foundPlaylist);
  });
});

// export router
module.exports = router;