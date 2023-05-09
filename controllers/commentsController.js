const asyncHandler = require('express-async-handler');
const Comments = require('../models/comments');

exports.getComments = asyncHandler(async (req, res) => {
    const allComments = await Comments.find({ post: req.params.postID });
    res.json(allComments);
});

exports.createComment = asyncHandler(async (req, res) => {
    const newComment = new Comments({
        name: req.body.name,
        content: req.body.content,
        post: req.params.postID,
    });
    newComment.save();
    res.json(newComment);
});

exports.getOneComment = asyncHandler(async (req, res) => {
    const comment = await Comments.findById(req.params.commentID);
    res.json(comment);
});

// exports.deletePost = asyncHandler(async (req, res) => {
//     const deletedPost = await Posts.findByIdAndRemove(req.params.postID);
//     res.json(deletedPost);
// });

// exports.updatePost = asyncHandler(async (req, res) => {
//     const post = await Posts.findById(req.params.postID);
//     post.title = req.body.title;
//     post.content = req.body.content;
//     post.save();
//     res.json(post);
// });
