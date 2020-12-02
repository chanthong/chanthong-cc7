const passport = require("passport");
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../models');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
};

const jwtStrategy = new Strategy(option, async (payload, done) => {
    const targetPartner = await db.Partner.findOne({ where: { id: payload.id } });
    const targetUser = await db.User.findOne({ where: { id: payload.id } });
    // const targetReserve = await db.Reserve.findOne({ where: { id: payload.id } });

    if (targetPartner) {
        done(null, targetPartner);
    } else if (targetUser) {
        done(null, targetUser);
    } else {
        done(null, false);
    }
});

passport.use("jwt-auth", jwtStrategy);