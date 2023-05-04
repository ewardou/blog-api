const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    content: String,
    date: { type: Date, default: Date.now },
    isPublic: { type: Boolean, default: false },
});

module.exports = mongoose.model('posts', postSchema);
