const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const passportJWT = require('passport-jwt');
const User = require('./models/users');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username });
            if (!user) {
                return done(null, false, { message: 'Incorrect email' });
            }
            bcrypt.compare(password, user.password, (err, res) => {
                if (res) {
                    return done(null, user);
                }
                return done(null, false, { message: 'Incorrect password' });
            });
        } catch (err) {
            return done(err);
        }
    })
);

passport.use(
    new JWTStrategy(
        {
            jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRET,
        },
        (jwtPayload, done) =>
            User.findById(jwtPayload._id)
                .then((user) => done(null, user))
                .catch((err) => done(err))
    )
);
