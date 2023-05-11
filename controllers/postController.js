const asyncHandler = require('express-async-handler');
const Posts = require('../models/posts');

exports.getPosts = asyncHandler(async (req, res) => {
    const allPosts = await Posts.find();
    res.json(allPosts);
});

exports.getPublicPosts = asyncHandler(async (req, res) => {
    const publicPosts = await Posts.find({ isPublic: true });
    res.json(publicPosts);
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

exports.deletePost = asyncHandler(async (req, res) => {
    const deletedPost = await Posts.findByIdAndRemove(req.params.postID);
    res.json(deletedPost);
});

exports.updatePost = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.postID);
    Object.keys(req.body).forEach((item) => {
        post[item] = req.body[item];
    });
    await post.save();
    res.json(post);
});
