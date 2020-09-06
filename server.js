const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
require("dotenv").config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/'+ `Spotify`;

//   // Middleware
// //////////////////////////

app.use(express.json());
app.use(express.static("build"));

app.listen(PORT, () => console.log("Listening on port:", PORT));
