const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: {type: String, required: true}
}, { timestamps: true });

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: { type: String, required: true },
    comments: [commentSchema]
},{ timestamps: true });

module.exports = mongoose.model('Post', postSchema);

