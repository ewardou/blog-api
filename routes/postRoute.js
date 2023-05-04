const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:postID', postController.getOnePost);
router.put('/:postID', postController.updatePost);
router.delete('/:postID', postController.deletePost);

module.exports = router;
