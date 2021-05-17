const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy


//To run passport.js config we must require it, it wont run automatically
require('./services/passport');

const app = express();

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(5001, () => {
    console.log('Listening on 5001')
})