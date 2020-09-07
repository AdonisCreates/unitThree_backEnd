const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    albumURL: {
        type: String,
        required: true,
        unique: false
    },
    albumName: {
        type: String,
        required: true,
        unique: false,
    },
    albumsImg: {
        type: String,
        required: false,
    },
    images: [{
        type: Object,
        required: true
    }],
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;