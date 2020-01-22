const mongoose = require('mongoose');
const { Schema } = mongoose;

const MediaSchema = new Schema ({
    publicId: { type: Number, required: true, unique: true },
    title: { type: String },
    imgSrc: { type: String },
    imgCover: { type: String },
    type: { type: String },
    year: { type: Number },
    featured: { type: String },
    classification: { type: String },
    genre: { type: String },
    new: { type: Boolean },
    live: { type: Boolean },
    description: { type: String },
    duration: { type: String },
    date: { type: String },
    from: { type: String },
    to: { type: String }
});

module.exports = mongoose.model('Media', MediaSchema);
