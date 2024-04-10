const mongoose = require('mongoose');
 
const urlShortSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required: true,
    },
    hash: {
        type: String,
        required: true,
        unique: true,
    },
    hits: {
        type: Number,
        required: true,
        default: 0,
    },
}, {
    timestamps: true,
    autoCreate: true,
});

const urlShortModel = mongoose.model('urlShort', urlShortSchema);
 
module.exports = urlShortModel;