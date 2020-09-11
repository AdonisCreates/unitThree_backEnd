const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8888;
const cors_proxy = require('cors-anywhere')

//middleware
app.use(cors());
app.use(express.static('build'));
app.use(express.static("public"));
app.use(express.json());

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/" + `Spotify`;
console.log(MONGODB_URI);

// mongoose connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to Spotify");
});

// Controllers
const trackController = require("./controllers/trackController.js");
app.use("/spotify", trackController);

const playlistController = require("./controllers/playlistController.js");
app.use("/playlist", playlistController);

app.use("/", require("./db/spotify.js"));

cors_proxy.createServer({
  originWhitelist: [],
  requireHeader: [],
}).listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
