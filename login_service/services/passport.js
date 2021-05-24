const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.serializeUser((user, done) => {
    //passes to deserialize user
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: keys.CLIENTID,
    clientSecret: keys.CLIENTSECRET,
    callbackURL: '/auth/google/callback'
},
    //This gets called when google initialises callbackURL
    (accessToken, refreshToken, profile, done) => {
        //Passes user id to serialize user

        const user = {
            id: profile.id,
            name: profile.displayName,
            avatar: profile.photos[0].value
        }

        done(null, user)
    }));