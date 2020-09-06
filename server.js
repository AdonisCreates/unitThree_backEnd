const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT || 8888;

//middleware
app.use(cors());
// app.use(express.json());

app.use('/', require('./db/spotify.js'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});