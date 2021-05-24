const router = require('express').Router();
const passport = require('passport');

router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
)

router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }));

router.get('/google/success', (req, res) => {
    res.status(200).send({ status: 'OK' });
});

router.get('/google/failure', (req, res) => {
    res.status(401).send({ status: 'Unauthorised' });
});

module.exports = router;