const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/users');

exports.logInFn = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user,
            });
        }

        req.login(user, { session: false }, (err) => {
            if (err) {
                res.send(err);
            }
            const token = jwt.sign(user.toJSON(), process.env.SECRET, {
                expiresIn: '100m',
            });
            return res.json({ token });
        });
    })(req, res);
};

exports.signUpFn = (req, res, next) => {
    if (req.body.key !== process.env.SIGN_UP_KEY) {
        return res
            .status(400)
            .json({ message: 'You cannot sign up without the correct key' });
    }
    bcrypt.hash(
        req.body.password,
        10,
        asyncHandler(async (err, hashedPassword) => {
            if (err) {
                return next(err);
            }
            const newUser = new User({
                username: req.body.username,
                password: hashedPassword,
            });
            await newUser.save();
            res.json(newUser);
        })
    );
};
