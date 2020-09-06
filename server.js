const express = require('express');
const app = express();
require('dotenv').config();
const cors = require("cors");
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8888;

//middleware
app.use(cors());
// app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `Spotify`;
console.log(MONGODB_URI);

// mongoose connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongoDB-StockX-BABYYY");
})

app.use('/', require('./db/spotify.js'))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});