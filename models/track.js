const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  artists: [
    {
      type: String
    }
  ],
  trackName: {
    type: String,
    required: true
  },
  albumName: {
    type: String
  },
  albumImgURL: [
    {
      type: String
    }
  ]
});

const Track = mongoose.model("Track", trackSchema);
module.exports = Track;
