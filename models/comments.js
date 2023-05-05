const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    name: { type: String, default: 'Anonymous' },
    content: { type: String, required: true, maxLength: 1000 },
    date: { type: Date, default: Date.now },
    post: { type: Schema.Types.ObjectId, ref: 'posts', required: true },
});

module.exports = mongoose.model('comments', commentSchema);
