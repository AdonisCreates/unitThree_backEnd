const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    artistName: {
        type: String,
        required: true,
        unique: false
    },
    songName: {
        type: String,
        required: true,
        unique: false,
    },
    albums: {
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

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;