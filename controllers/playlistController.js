const express = require("express");
const router = express.Router();
const Dog = require("../models/track.js");

// Index
router.get("/", (req, res) => {
  // Use Dog model to get all Dogs
  Dog.find({}, (error, allDogs) => {
    error ? res.status(404).json(error) : res.status(200).json(allDogs);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  // Delete document from collection
  Dog.findByIdAndRemove(req.params.id, (err, dog) => {
    error ? res.status(404).json(error) : res.status(200).json(dog);
  });
});

// Update
router.put("/:id", (req, res) => {
  console.log(req.body);
  // Update the dog document using our model
  Dog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedDog) => {
      error ? res.status(404).json(error) : res.status(200).json(updatedDog);
    }
  );
});

// Create
router.post("/", (req, res) => {
  console.log(req.body);
  // Use Model to create Dog Document
  Dog.create(req.body, (error, createdDog) => {
    // Once created - respond to client
    error ? res.status(404).json(error) : res.status(200).json(createdDog);
  });
});

// Show
router.get("/:id", (req, res) => {
  // Find the specific document
  Dog.findById(req.params.id, (error, foundDog) => {
    // render the Show route and pass it the foundDog
    error ? res.status(404).json(error) : res.status(200).json(foundDog);
  });
});

// export router
module.exports = router;