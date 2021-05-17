const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(new GoogleStrategy({
    clientID: keys.CLIENTID,
    clientSecret: keys.CLIENTSECRET,
    callbackURL: '/auth/google/callback'
},
    //This gets called when google initialises callbackURL
    (accessToken, refreshToken, profile, done) => {
        //Creates one model instance of a record, .save() will save the instance to the database

    }));