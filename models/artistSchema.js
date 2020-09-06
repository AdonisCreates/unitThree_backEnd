const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const artistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    albums: {
        type: String,
        required: false,
    },
    genres: [{
        type: String,
        required: true
    }],
    images: [{
        type: Object,
        required: true
    }],
}, {
    timestamps: true
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;