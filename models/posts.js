const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    isPublic: { type: Boolean, default: false },
});

module.exports = mongoose.model('posts', postSchema);
