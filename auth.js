const passport = require('passport');
const {Strategy} = require('passport-jwt');
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (app) => {
    const Users = app.db.models.Users;
    const cfg = app.libs.config;
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = cfg.jwtSecret;
    const strategy = new Strategy(opts,(payload, done) => {
        Users.findById(payload.id)
            .then((user) => {
                if (user) {
                    return done(null, {
                        id: user.id,
                        email: user.email
                    });
                }
                return done(null, false);
            }).catch((error) => done(error, null));
    });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate('jwt', cfg.jwtSession);
        }
    };
};