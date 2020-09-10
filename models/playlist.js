const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
  {
    name: {type: String},
    tracks: Array,
  },
  {
    timestamps: true
  }
);

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
