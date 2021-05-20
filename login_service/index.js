const express = require('express');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');

//To run passport.js config we must require it, it wont run automatically
require('./services/passport');

const app = express();

app.use(cookieSession({
    maxAge: 60 * 60 * 100,
    keys: [keys.COOKIEKEY]
}));

// Init passport

app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }));

app.get('/auth/google/success', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

app.get('/auth/google/failure', (req, res) => {
    res.status(401).send({ status: 'Unauthorised' });
});

app.listen(5001, () => {
    console.log('Listening on 5001')
})