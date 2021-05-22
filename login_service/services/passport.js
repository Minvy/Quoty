const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    //passes to deserialize user
    done(null, user);
});

passport.deserializeUser((id, done) => {
    done(null, id);
});

passport.use(new GoogleStrategy({
    clientID: keys.CLIENTID,
    clientSecret: keys.CLIENTSECRET,
    callbackURL: '/auth/google/callback'
},
    //This gets called when google initialises callbackURL
    (accessToken, refreshToken, profile, done) => {
        //Passes user id to serialize user
        done(null, profile.id)
    }));