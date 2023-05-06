const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');

router.post('/log-in', authController.logInFn);
router.post('/sign-up', authController.signUpFn);

module.exports = router;
