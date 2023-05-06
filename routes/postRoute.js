const express = require('express');
const passport = require('passport');
const postController = require('../controllers/postController');
const commentsController = require('../controllers/commentsController');

const router = express.Router();

router.get('/', postController.getPosts);
router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    postController.createPost
);
router.get('/:postID', postController.getOnePost);
router.put(
    '/:postID',
    passport.authenticate('jwt', { session: false }),
    postController.updatePost
);
router.delete(
    '/:postID',
    passport.authenticate('jwt', { session: false }),
    postController.deletePost
);

router.get('/:postID/comments', commentsController.getComments);
router.post('/:postID/comments', commentsController.createComment);
router.get('/:postID/comments/:commentID', commentsController.getOneComment);

module.exports = router;
