const express = require('express');
const router = express.Router();
const Spotify = require('../models/artistSchema.js');

// Index Route

router.get('/', (req, res)=>{
res.send('Index')
});

// New

// Delete/DESTROY

// Update

// Create 

// Edit

// Patch

// Show

module.exports = router;