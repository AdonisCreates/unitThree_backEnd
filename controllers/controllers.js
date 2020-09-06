const express = require('express');
const router = express.Router();
const Spotify = require('../models/artistSchema.js');

// Index Route

router.get('/', (req, res)=>{
res.send('Index')
});

// New
router.get('/new' , (req, res)=>{
    res.send('New');
});

// Delete/DESTROY

// Update

// Create 

// Edit

// Patch

// Show

module.exports = router;