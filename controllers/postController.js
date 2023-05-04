const asyncHandler = require('express-async-handler');
const Posts = require('../models/posts');

exports.getPosts = asyncHandler(async (req, res) => {
    const allPosts = await Posts.find();
    res.json(allPosts);
});

exports.createPost = asyncHandler(async (req, res) => {
    const newPost = new Posts({
        title: req.body.title,
        content: req.body.content,
    });
    newPost.save();
    res.json(newPost);
});

exports.getOnePost = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.postID);
    res.json(post);
});
