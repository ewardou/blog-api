const express = require('express');
const postController = require('../controllers/postController');
const commentsController = require('../controllers/commentsController');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:postID', postController.getOnePost);
router.put('/:postID', postController.updatePost);
router.delete('/:postID', postController.deletePost);

router.get('/:postID/comments', commentsController.getComments);
router.post('/:postID/comments', commentsController.createComment);
router.get('/:postID/comments/:commentID', commentsController.getOneComment);

module.exports = router;
